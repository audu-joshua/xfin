import { NextRequest, NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';
import crypto from 'crypto';  // Import crypto module for hashing

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_API_SERVER!,
});

const MailchimpAudience = process.env.MAILCHIMP_AUDIENCE_ID!;

// Function to generate MD5 hash of email (subscriber hash)
const getSubscriberHash = (email: string): string => {
  return crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
};

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Generate subscriber hash from email
    const subscriberHash = getSubscriberHash(email);

    try {
      // Check if the user is already subscribed
      const existingMember = await mailchimp.lists.getListMember(MailchimpAudience, subscriberHash);

      if (existingMember.status === "subscribed") {
        return NextResponse.json({ message: "You are already subscribed!" });
      }
    } catch (error: any) {
      // If error status is 404, user is not subscribed, ignore the error
      if (error.response?.status !== 404) {
        console.error("Error checking subscription status:", error);
        return NextResponse.json({ error: "Error checking subscription status" }, { status: 500 });
      }
    }

    // Add email to Mailchimp list
    const response = await mailchimp.lists.addListMember(MailchimpAudience, {
      email_address: email,
      status: "subscribed",
    });

    return NextResponse.json({ message: "Successfully subscribed!" });
  } catch (error: any) {
    console.error("Error occurred:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
