"use client"
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import { sendSubscriptionEmail } from '../../../utils/subscribe'; // Adjust the path as needed

export function Footer() {
  const [email, setEmail] = useState(""); // State to store the email
  const [error, setError] = useState(""); // State for error messages
  const [success, setSuccess] = useState(""); // State for success messages

  const handleSubscribe = async () => {
    if (!email) {
      setError('Please enter an email address.');
      return;
    }
    
    try {
      // Call the EmailJS function with the email address
      const response = await sendSubscriptionEmail(email);
      console.log('EmailJS response:', response); // Log response for debugging
      setSuccess('Successfully subscribed!');
      setEmail(""); // Clear the input field
      setError(""); // Clear any previous errors
    } catch (err) {
      console.error('Error:', err); // Log error details for debugging
      setError('There was an error subscribing to the newsletter. Please try again.');
      setSuccess(""); // Clear any previous success messages
    }
  };


  return (
    <footer className="p-[20px] bg-black w-full md:py-[30px] md:px-[108px] z-20" style={{ zIndex: 20 }}>
      <div className="md:grid grid-cols-2 md:grid-cols-1 justify-between gap-x-[50px] lg:gap-x-[150px] 2xl:gap-x-[325px] ">
        <section className=" md:hidden">
          <div>
          <div className="grid items-center md:flex md:w-full justify-between ">
            <div className=" text-white">
              <h3 className=" font-bold text-xl"> Get to our Newsletter </h3>
              <p className=" font-normal text-xs py-2"> Be the first to receive update when they roll out. </p>
              <div className="py-2 gap-4 my-4 px-2 rounded-xl w-full flex bg-white justify-between">
              <input placeholder="Email Address" value={email}
          onChange={(e) => setEmail(e.target.value)} // Update state on input change
          className=" w-[60%] focus:outline-none placeholder:text-black pl-2 text-black"/>
              <p onClick={handleSubscribe} className="py-2 rounded-2xl w-[40%] text-white px-4 bg-[#FF0909] "> Subscribe </p>
            </div>
            </div>

            
            <div className="">

            <div className="flex justify-between items-center pt-4">
          
            <ul className="mt-[20px] grid gap-6">
              <li>
                <Link href="https://www.instagram.com/xifin_enterprise/" className="flex gap-4">
                  <div className="flex items-center gap-x-[10px] sm:gap-x-[15px]">
                    <img
                      src="/images/instagram.svg"
                      alt="instagram"
                      width={"34px"}
                      height={"24px"}
                    />
                  </div>
                  <p className="text-white text-base"> Xifin Enterprise </p>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/xifin-enterprise/" className="flex gap-4">
                  {" "}
                  <div className="flex items-center gap-x-[10px] sm:gap-x-[15px]">
                    <img
                      src="/images/linkedin.svg"
                      alt="Linkedin"
                      width={"34px"}
                      height={"24px"}
                    />
                  </div>
                  <p className="text-white text-base"> Xifin Enterprise </p>
                </Link>
              </li>
              
              <li>
                <Link href="https://www.facebook.com/profile.php?id=61560354717006&mibextid=ZbWKwL" className="flex gap-4">
                  {" "}
                  <div className="flex items-center gap-x-[10px] sm:gap-x-[15px]">
                    <img
                      src="/images/facebook.svg"
                      alt="facebook"
                      width={"34px"}
                      height={"24px"}
                    />
                  </div>
                  <p className="text-white text-base"> Xifin Enterprise </p>
                </Link>
              </li>
            </ul>
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              height={85}
              width={85}
              className="w-[50%] "
            />
            </div>
            </div>

            <div className="font-[800] text-[16px] md:text-lg lg:text-2xl text-white">
              
            </div>
          </div>

          </div>
        </section>


        <section className="hidden md:flex py-8 pb-12">
          <div className=" items-center md:flex md:w-full justify-between">
            <div className=" text-white w-full">
              <h3 className=" font-bold text-xl"> Get to our Newsletter </h3>
              <p className=" font-normal text-xs py-2"> Be the first to receive update when they roll out. </p>

              <Image
              src={"/images/logo.svg"}
              alt="logo"
              height={85}
              width={85}
              className="w-[30%] "
            />
            </div>

            
            <div className="text-center w-full">

            <div className="grid items-center pt-4">
            <div className="py-2 my-4 px-2 gap-4 rounded-xl w-full flex bg-white justify-between">
              <input placeholder="Email Address" value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update state on input change
                    className=" focus:outline-none placeholder:text-black pl-2 w-[70%] text-black"/>
              <p className="py-2 rounded-2xl cursor-pointer hover:bg-black text-white px-6 bg-[#FF0909] w-[30%]" onClick={handleSubscribe}> Subscribe </p>
            </div>
            <ul className="mt-[20px] flex justify-between">
              <li>
                <Link href="https://www.instagram.com/xifin_enterprise/" className="grid gap-4">
                  <div className="flex items-center gap-x-[10px] sm:gap-x-[15px] justify-center">
                    <img
                      src="/images/instagram.svg"
                      alt="instagram"
                      width={"34px"}
                      height={"24px"}
                    />
                  </div>
                  <p className="text-white text-base"> Xifin Enterprise </p>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/xifin-enterprise/" className="grid gap-4">
                  {" "}
                  <div className="flex items-center gap-x-[10px] sm:gap-x-[15px] justify-center">
                    <img
                      src="/images/linkedin.svg"
                      alt="Linkedin"
                      width={"34px"}
                      height={"24px"}
                    />
                  </div>
                  <p className="text-white text-base"> Xifin Enterprise </p>
                </Link>
              </li>
              
              <li>
                <Link href="https://www.facebook.com/profile.php?id=61560354717006&mibextid=ZbWKwL" className="grid gap-4">
                  {" "}
                  <div className=" flex items-center gap-x-[10px] sm:gap-x-[15px] justify-center">
                    <img
                      src="/images/facebook.svg"
                      alt="facebook"
                      width={"34px"}
                      height={"24px"}
                    />
                  </div>
                  <p className="text-white text-base"> Xifin Enterprise </p>
                </Link>
              </li>

              
            </ul>
            

            </div>
            </div>

            <div className="font-[800] text-[16px] md:text-lg lg:text-2xl text-white">
              
            </div>
          </div>        
        </section>

        <section className="text-white grid gap-6 grid-cols-2 md:flex justify-between items-stretch gap-x-[15px] sm:gap-x-[30px] mt-[73px] lg:mt-0">
          <div>
            <p className="font-semibold text-[22px]">About Us</p>
            <ul className="mt-[20px] flex flex-col gap-y-1 ">
              <li>
              <Link href="#mission" scroll={true} className=" scroll-smooth">Our Vision</Link>

              </li>
              <li>
                <Link href="#mission">Our Mission</Link>
              </li>              
            </ul>
          </div>

          <div>
            <p className="font-semibold text-[22px]">Faq</p>
            <ul className="mt-[20px] flex flex-col gap-y-[15px]">
              <li>
                <Link href="/#faq"> Satisfaction </Link>
              </li>
              <li>
                <Link href="/#faq"> Services </Link>
              </li>
              <li>
                <Link href="/#faq">Pricing</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-[22px]">Career</p>
            <ul className="mt-[20px] flex flex-col gap-y-[15px]">
              <li>
                <Link href="/career/#values">Our Values</Link>
              </li>
              <li>
                <Link href="/career/#values">Who We Are</Link>
              </li>
              <li>
                <Link href="/career">Job Openings</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[22px]">Service</p>
            <ul className="mt-[20px] flex flex-col gap-y-[15px]">
              <li>
                <Link href="/services/graphicdesign">Graphic Design</Link>
              </li>
              <li>
                <Link href="/services/ui">UI/UX Design</Link>
              </li>

              <li>
                <Link href="/services/webDev">Web Development</Link>
              </li>

              <li>
                <Link href="/services/it">IT Services</Link>
              </li>

              <li>
                <Link href="/services/crypto">Crypto Exchange</Link>
              </li>

              <li>
                <Link href="/services/virtualassistant">Virtual Assistance</Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div
        className="py-[12px] flex justify-center mt-[50px]"
        style={{ borderTop: "1px solid #8B8B8B" }}
      >
        <p className="font-medium text-white">&copy; Xifin Enterprise</p>
      </div>
    </footer>
  );
}
