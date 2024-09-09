import type { NextApiRequest, NextApiResponse } from "next";
import md5 from "md5";

// Mailchimp setup
const mailchimp = require("@mailchimp/mailchimp_marketing");
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_API_SERVER!,
});

const MailchimpAudience = process.env.MAILCHIMP_AUDIENCE_ID!;

async function createAudienceIfNotExists() {
  const event = {
    name: "Mail Subscription List"
  };

  const footerContactInfo = {
    company: "Your Company",
    address1: "123 Your Street",
    city: "Your City",
    state: "Your State",
    zip: "12345",
    country: "US"
  };

  const campaignDefaults = {
    from_name: "Your Company",
    from_email: "info@yourcompany.com",
    subject: "Subscribe to our list",
    language: "EN_US"
  };

  try {
    // Attempt to get the list
    await mailchimp.lists.getList(MailchimpAudience);
    console.log("Audience already exists.");
  } catch (error) {
    if (error instanceof Error && error.message === "404") {
        // If the list doesn't exist, create it
      await mailchimp.lists.createList({
        name: event.name,
        contact: footerContactInfo,
        permission_reminder: "You are receiving this email because you opted in.",
        email_type_option: true,
        campaign_defaults: campaignDefaults
      });
      console.log("Successfully created an audience.");
    } else {
      throw error;
    }
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Extract email from request body
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Generate MD5 hash of the email
    const subscriberHash = md5(email.toLowerCase());

    // Check if the user is already subscribed
    const checkUrl = `https://${process.env.MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members/${subscriberHash}`;

    const checkResponse = await fetch(checkUrl, {
      method: "GET",
      headers: {
        Authorization: `Basic ${Buffer.from(`any:${process.env.MAILCHIMP_API_KEY}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
    });

    if (checkResponse.ok) {
      const checkResult = await checkResponse.json();

      // If the user is already subscribed
      if (checkResult.status === "subscribed") {
        return res.status(400).json({ error: "This email is already subscribed." });
      }
    } else if (checkResponse.status === 404) {
      // If the user is not subscribed, proceed to subscribe them
      const customUrl = `https://${process.env.MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`;

      const subscribeResponse = await fetch(customUrl, {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`any:${process.env.MAILCHIMP_API_KEY}`).toString("base64")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      });

      const result = await subscribeResponse.json();

      if (subscribeResponse.ok) {
        return res.status(200).json({ message: "Successfully subscribed!" });
      } else {
        return res.status(subscribeResponse.status).json({ error: result.detail || "An error occurred" });
      }
    } else {
      return res.status(checkResponse.status).json({ error: "Error checking subscription status" });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ error: "Internal jjnjn server error" });
  }
}
