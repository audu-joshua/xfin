import { NextRequest, NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_API_SERVER!,
});

const MailchimpAudience = process.env.MAILCHIMP_AUDIENCE_ID!;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Add email directly to Mailchimp list
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
