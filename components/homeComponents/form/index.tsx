"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import jude from '@/public/images/IMG_20230804_021813.png'
import mail from '@/public/images/mail.png'
import linkedin from '@/public/images/linkedin.png'
import phone from '@/public/images/phone.png'
import instagram from '@/public/images/instagram.png'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    industry: '',
    budget: '',
    message: '',
    agreement: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
  
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // You can add your form submission logic here
  };

  return (
    <div className="grid grid-cols-1 md:flex md:flex-row lg:px-28 px-6 py-12 bg-white gap-8">
  <form onSubmit={handleSubmit} className="md:w-[55%] md:pr-4 bg-[#FB2B30] bg-opacity-15 p-10 md:py-4 rounded-2xl">
    <h3 className="text-[#FB2B30] text-2xl md:text-3xl font-bold pb-6 md:pb-4">Let&apos;s Talk</h3>
  
    {/* Name Input */}
    <div className="mb-2">
      <label className="block text-black mb-1">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border-b-2 border-black focus:outline-none text-black rounded-md bg-transparent"
        required
      />
    </div>

    {/* Phone and Email Inputs - Flex on Medium Screens */}
    <div className="mb-2 md:flex md:space-x-4">
      <div className="md:w-1/2">
        <label className="block text-black mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border-b-2 border-black focus:outline-none text-black rounded-md bg-transparent"
          required
        />
      </div>
      <div className="md:w-1/2">
        <label className="block text-black mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border-b-2 border-black focus:outline-none text-black rounded-md bg-transparent"
          required
        />
      </div>
    </div>

    {/* Industry and Expected Budget Inputs - Flex on Medium Screens */}
    <div className="mb-2 md:flex md:space-x-4">
      <div className="md:w-1/2">
        <label className="block text-black mb-1">Industry</label>
        <input
          type="text"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full p-2 border-b-2 border-black focus:outline-none text-black rounded-md bg-transparent"
        />
      </div>
      <div className="md:w-1/2">
        <label className="block text-black mb-1">Expected Budget</label>
        <input
          type="text"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full p-2 border-b-2 border-black focus:outline-none text-black rounded-md bg-transparent"
        />
      </div>
    </div>

    {/* Message Textarea */}
    <div className="mb-2">
      <label className="block text-black mb-1">Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 border-b-2 border-black focus:outline-none text-black rounded-md bg-transparent"
      />
    </div>

    {/* Agreement Checkbox */}
    <div className="mb-2">
      <label className="flex items-center text-black mb-1">
        <input
          type="checkbox"
          name="agreement"
          checked={formData.agreement}
          onChange={handleChange}
          className="mr-2"
          required
        />
        I agree that my personal information will be processed and stored by Xifin Enterprise.
      </label>
    </div>

    {/* Submit Button */}
    <button type="submit" className="bg-[#FB2B30] text-white p-2 px-8 mt-4 rounded-full">Send</button>
  </form>

  <div className="md:w-[45%] grid items-center relative">
    {/* Image Container */}
    <div className="relative rounded-2xl overflow-hidden">
      {/* Insert your image here */}
      <Image src={jude} alt="Your Image" className="w-full" />
      {/* Glassmorphic Overlay */}
      <div className="absolute bottom-2 mx-4 rounded-xl md:bottom-6 w-full md:h-[35%] h-[40%] p-2 md:p-4 bg-white bg-opacity-40 backdrop-blur-sm">
        <h4 className="text-lg md:text-xl font-semibold text-black text-center py-2">Jude Iria, CEO</h4>
        <div className="grid md:grid-cols-2 gap-4 py-2">
          <div className="flex text-black">
          <Image src={mail} alt="Mail Adress" className='text-black '/>
            <p className="px-4">judeiria3390@gmail.com</p>
          </div>

          <div className="flex text-black">
          <Image src={linkedin} alt="Linkedin"/>
            <p className="px-4">Jude Iria</p>
          </div>

          <div className="md:flex hidden text-black">
          <Image src={phone} alt="Phone Number"/>
            <p className="px-4">+2349035240907</p>
          </div>

          <div className="md:flex hidden text-black">
          <Image src={instagram} alt="Instagram"/>
            <p className="px-4">Xifin Enterprise</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default ContactForm;
