import { NextApiRequest, NextApiResponse } from 'next';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY, // Better to use environment variables for security
  server: 'us17', // Your Mailchimp server prefix
});

const listId = process.env.MAILCHIMP_LIST_ID || 'b55c6848d4'; // List ID

export default async function sendSubscriptionEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    try {
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: email,
        status: 'subscribed',
      });

      return res.status(200).json({ message: 'Successfully subscribed!', response });
    } catch (error: any) {
      // Detailed error logging
      console.error('Error subscribing user:', error);

      // Handle specific errors based on Mailchimp response
      if (error.response?.body?.title === 'Member Exists') {
        return res.status(400).json({ error: 'This email is already subscribed.' });
      }

      return res.status(500).json({ error: 'There was an error subscribing to the newsletter.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
