"use client";
import React from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import jude from "@/public/images/IMG_20230804_021813.png";
import { BsPhone, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

// Validation Schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  industry: Yup.string(),
  budget: Yup.string(),
  message: Yup.string(),
  agreement: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
});

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      industry: "",
      budget: "",
      message: "",
      agreement: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        // Simulate sending form data to an API endpoint
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          // Simulate sending an automated message (for example, an email or an alert)
          alert(`Thank you, ${values.name}, for contacting us! We'll get back to you soon.`);
        } else {
          alert("There was an error submitting your form. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting your form. Please try again.");
      }
    },
  });

  return (
    <div className="grid grid-cols-1 md:flex md:flex-row lg:px-28 px-6 py-12 bg-white gap-8">
      <form onSubmit={formik.handleSubmit} className="md:w-[55%] md:pr-4 bg-[#FB2B30] bg-opacity-15 p-10 md:py-4 rounded-2xl" id="contactUs">
        <h3 className="text-[#FB2B30] text-2xl md:text-3xl font-bold pb-6 md:pb-4">Let's Talk</h3>

        {/* Name Input */}
        <div className="mb-2">
          <label className="block text-black mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border-b-2 border-black focus:outline-none text-black rounded-md bg-transparent"
            required
          />
          {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}
        </div>

        {/* Phone and Email Inputs - Flex on Medium Screens */}
        <div className="mb-2 md:flex md:space-x-4">
          <div className="md:w-1/2">
            <label className="block text-black mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border-b-2 border-black focus:outline-none text-black rounded-md bg-transparent"
              required
            />
            {formik.touched.phone && formik.errors.phone && <p className="text-red-500 text-sm">{formik.errors.phone}</p>}
          </div>
          <div className="md:w-1/2">
            <label className="block text-black mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border-b-2 border-black focus:outline-none text-black rounded-md bg-transparent"
              required
            />
            {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
          </div>
        </div>

        {/* Industry and Expected Budget Inputs - Flex on Medium Screens */}
        <div className="mb-2 md:flex md:space-x-4">
          <div className="md:w-1/2">
            <label className="block text-black mb-1">Industry</label>
            <input
              type="text"
              name="industry"
              value={formik.values.industry}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border-b-2 border-black focus:outline-none text-black rounded-md bg-transparent"
            />
            {formik.touched.industry && formik.errors.industry && <p className="text-red-500 text-sm">{formik.errors.industry}</p>}
          </div>
          <div className="md:w-1/2">
            <label className="block text-black mb-1">Expected Budget</label>
            <input
              type="text"
              name="budget"
              value={formik.values.budget}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border-b-2 border-black focus:outline-none text-black rounded-md bg-transparent"
            />
            {formik.touched.budget && formik.errors.budget && <p className="text-red-500 text-sm">{formik.errors.budget}</p>}
          </div>
        </div>

        {/* Message Textarea */}
        <div className="mb-2">
          <label className="block text-black mb-1">Message</label>
          <textarea
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border-b-2 border-black focus:outline-none text-black rounded-md bg-transparent"
          />
          {formik.touched.message && formik.errors.message && <p className="text-red-500 text-sm">{formik.errors.message}</p>}
        </div>

        {/* Agreement Checkbox */}
        <div className="mb-2">
          <label className="flex items-center text-black mb-1">
            <input
              type="checkbox"
              name="agreement"
              checked={formik.values.agreement}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mr-2"
              required
            />
            I agree that my personal information will be processed and stored by Xifin Enterprise.
          </label>
          {formik.touched.agreement && formik.errors.agreement && <p className="text-red-500 text-sm">{formik.errors.agreement}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-[#FB2B30] text-white p-2 px-8 mt-4 rounded-full">
          Send
        </button>
      </form>

      <div className="relative md:w-[45%] grid items-center">
  {/* Image Container */}
  <div className="relative rounded-2xl grid items-end">
    {/* Insert your image here */}
    <Image src={jude} alt="Your Image" className="w-full" />
    {/* Glassmorphic Overlay */}
    <div className="absolute bottom-0 left-0 right-0 mx-auto px-2 pb-2 pr-4 w-[100%] md:w-[98%]">
      <div className="w-full rounded-xl p-2 md:p-4 bg-white bg-opacity-60">
        <h4 className="text-base md:text-xl font-semibold text-black text-center">Jude Iria, CEO</h4>
        <div className="grid gap-4 py-2">
          <div className="flex justify-between gap-4 items-center">
            <div className="flex items-center text-black cursor-pointer md:hover:animate-bounce">
              <FiMail />
              <p className="px-1 text-xs md:text-base">judeiria3390@gmail.com</p>
            </div>

            <div className="flex items-center text-black cursor-pointer md:hover:animate-bounce">
              <BsLinkedin />
              <p className="px-1 text-xs md:text-base">Jude Iria</p>
            </div>
          </div>

          <div className="flex justify-between gap-4 items-center">
            <div className="flex items-center text-black cursor-pointer md:hover:animate-bounce">
              <BsPhone />
              <p className="px-1 text-xs md:text-base">(+44) 7378201108</p>
            </div>

            <div className="flex items-center text-black cursor-pointer md:hover:animate-bounce">
              <BsInstagram />
              <p className="px-1 text-xs md:text-base">@iria-jude</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default ContactForm;
