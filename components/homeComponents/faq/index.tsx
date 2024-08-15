"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What services does your company provide?",
      answer:
        "Our company provides a range of services including web development, graphics designing, UX/UI design, crypto exchanges, virtual assistance and IT consulting. We strive to offer comprehensive solutions specialized to meet the specific needs of our clients.",
    },
    {
      question: "How can I get in touch with your team for inquiries?",
      answer:
        " You can reach our team through different avenues: by filling out the contact form on our website or sending us an email at xifinenterprise@gmail.com.  We’re ready to assist you with any questions or inquiries you may have!",
    },
    {
      question: "How do you ensure customer satisfaction with your services?",
      answer:
        "We prioritize customer satisfaction by actively listening to our clients' needs, maintaining clear communication throughout the project and providing regular updates. Our team is dedicated to delivering high-quality solutions and we encourage feedback to continuously improve our services.",
    },
    {
      question:
        "What is your pricing structure for the services you offer?",
      answer:
        "Our pricing structure varies based on the specific services you require and the complexity of your project. We offer competitive rates tailored to different budgets after discussing your project requirements. ",
    },
    {
      question: "Do you offer package deals for multiple services?",
      answer:
        "Yes, we do offer package deals for clients interested in multiple services. These packages are designed to provide cost savings while delivering integrated solutions. Please contact us for more details and we would be happy to create a customized package that meets your needs.",
    },
    {
      question: "Can you help with branding and logo design?",
      answer:
        "Yes, we offer comprehensive branding services, including logo design. Our creative team works closely with you to understand your brand vision, ensuring that the logo and branding elements we create effectively represent your identity and resonate with your target audience.",
    },
    {
      question: "Do you offer ongoing website maintenance and support?",
      answer:
        "Absolutely! We provide ongoing website maintenance and support services to keep your site running smoothly. Our maintenance packages include regular updates, security monitoring, backups and technical support, allowing you to focus on your business while we handle the technical details.",
    },
    {
      question:
        "What tasks can your virtual assistants help with?",
      answer:
        "Our virtual assistants are skilled in a wide range of tasks including administrative support, customer service, social media management, social media marketing, data entry, research and more. They are trained to handle both routine and specialized tasks, freeing up your time so you can focus on more critical aspects of your business.",
    },
    {
      question: "What distinguishes your company from other tech service providers?",
      answer:
        "What sets our company apart is our commitment to understanding our clients' unique needs and delivering customized solutions that drive results. We prioritize transparency, communication and quality, and we take pride in our customer-centric approach. Our team is passionate about staying ahead of industry trends to provide innovative solutions that give our clients a competitive edge.",
    },
  ];

  return (
    <div  className="px-3 py-4 md:py-16 md:px-6 lg:px-12 bg-[#EFEFEF] md:flex md:justify-between md:gap-10 lg:gap-12 sm:px-[40]">

      <div className=" pt-12 pb-11 md:w-[40%]">
        <h3 className="text-[#EF0000] text-3xl font-bold leading-normal border-t-[1.5px] border-solid border-black pt-2 w-fit  lg:text-4xl">
          Frequently Asked Questions
        </h3>
        <p className="text-black font-semibold text-lg py-4"> 
            Still have questions?
        </p>
        <p className="text-black">
        Can't find the answers you re looking for?, Get in touch with us
        </p>
      </div>

      <div className="faq-dropdown md:w-[60%]">
        {faqData.map((item, index) => (
          <div
          id="faq"
            key={index}
            className="grid mb-4 rounded-lg border-solid border-[#D7D7D7] border "
          >
            <button
              className="question bg-[#EDEDED] text-base font-semibold leading-normal text-black py-5 px-3 flex justify-between"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className=" justify-start text-start text-base ">{item.question}</div>
              <div className="">
                <IoIosArrowDown />
              </div>
            </button>
            {openIndex === index && (
              <div className="p-2 text-sm bg-[#EDEDED] text-[#5C5C5C]">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
