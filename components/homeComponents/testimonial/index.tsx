"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Testimonial() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1.5 }} // Increase duration for slower animation
      className='lg:px-28 px-6 py-6 bg-white'
    >
      <div className='md:flex md:gap-8 items-center'>
        <img
          src="./images/IMG_20230804_021813.png"
          alt="Jude Aria"
          className="w-[100%] md:w-[50%]"
        />
        <div className='py-5'>
          <h2 className='text-black text-[32px] md:text-[34px] lg:text-5xl font-bold leading-none'>
            Transform Your Business
          </h2>
          <p className='text-black py-3 font-medium text-sm md:text-base lg:text-lg'>
            Discover how our expert services can elevate your digital presence
          </p>
        </div>
      </div>

      <div className='md:py-8 lg:py-12'>
        <div className='py-4'>
          <h2 className='text-black text-[32px] md:text-[34px] lg:text-5xl font-bold'>
            Trusted and Reliable
          </h2>
          <p className='text-black font-medium text-sm md:text-base lg:text-lg'>
            Listen to what our clients have to say about us
          </p>
        </div>
        <iframe
          width="100%"
          height="360"
          src="https://drive.google.com/file/d/1f4larPBO1FHIzbO8TEX9xvXMtSb58amg/preview"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className='rounded-xl'
        ></iframe>
      </div>
    </motion.div>
  );
}



{/*"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Testimonial() {
  const [isInView, setIsInView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const modalIframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Ensure window.innerWidth is correct
    console.log("Window width: ", window.innerWidth);
    if (window.innerWidth >= 1024) {
      // Open modal
      setIsModalOpen(true);
    } else {
      // Let the video play normally on smaller screens
      if (iframeRef.current) {
        iframeRef.current.src += "&autoplay=1";
      }
    }
  };
  

  const closeModal = () => {
    setIsModalOpen(false);
    if (modalIframeRef.current) {
      modalIframeRef.current.src = ""; // Stop the video in the modal when closed
    }
  };

  useEffect(() => {
    if (isModalOpen && modalIframeRef.current) {
      modalIframeRef.current.src =
        "https://drive.google.com/file/d/1woc9wBWFFiOz5amYELho_VgwJ9vZyRa8/preview";

      // Attempt to force autoplay by accessing the iframe's contentWindow
      setTimeout(() => {
        const modalIframeWindow = modalIframeRef.current?.contentWindow;
        if (modalIframeWindow) {
          modalIframeWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
          );
        }
      }, 1000); // Delay to ensure the iframe is loaded
    }
  }, [isModalOpen]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="lg:px-28 px-6 py-6 bg-white"
      >
        <div className="md:flex md:gap-8 items-center">
          <img
            src="./images/IMG_20230804_021813.png"
            alt="Jude Aria"
            className="w-[100%] md:w-[50%]"
          />
          <div className="py-5">
            <h2 className="text-black text-[32px] md:text-[34px] lg:text-5xl font-bold leading-none">
              Transform Your Business
            </h2>
            <p className="text-black py-3 font-medium text-sm md:text-base lg:text-lg">
              Discover how our expert services can elevate your digital presence
            </p>
          </div>
        </div>

        <div className="md:py-8 lg:py-12">
          <div className="py-4">
            <h2 className="text-black text-[32px] md:text-[34px] lg:text-5xl font-bold">
              Video Testimonials
            </h2>
            <p className="text-black font-medium text-sm md:text-base lg:text-lg">
              Listen to what our clients have to say about us
            </p>
          </div>
          <iframe
            ref={iframeRef}
            width="100%"
            height="360"
            src="https://drive.google.com/file/d/1woc9wBWFFiOz5amYELho_VgwJ9vZyRa8/preview"
            title="Testimonial Video"
            allow="accelerometer; modals autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="rounded-xl"
            onClick={handleVideoClick}
          ></iframe>
        </div>
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full">
            <button
              className="absolute top-3 right-3 text-white bg-red-600 rounded-full p-2"
              onClick={closeModal}
            >
              X
            </button>
            <iframe
              ref={modalIframeRef}
              width="100%"
              height="500"
              title="Testimonial Video"
              allow="accelerometer; modals autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
*/}
