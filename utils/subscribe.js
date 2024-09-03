// lib/emailService.js
import emailjs from 'emailjs-com';

export const sendSubscriptionEmail = (email) => {
  return emailjs.send('service_t8kcmm4', 'template_ow9g2p4', {
    to_email: email,
  }, 'i-_4dtMn3rZR9OFB6');
};
