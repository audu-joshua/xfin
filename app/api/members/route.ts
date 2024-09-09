import { NextRequest, NextResponse } from 'next/server';

const mailchimp = require("@mailchimp/mailchimp_marketing");
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_API_SERVER!,
});

const MailchimpAudience = process.env.MAILCHIMP_AUDIENCE_ID!;

export async function GET(req: NextRequest) {
  try {
    const url = `https://${process.env.MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Basic ${Buffer.from(`any:${process.env.MAILCHIMP_API_KEY}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const result = await response.json();
      return NextResponse.json({ error: result.detail || "An error occurred" }, { status: response.status });
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
