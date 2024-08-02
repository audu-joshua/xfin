import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
export function Footer() {
  return (
    <footer className="p-[20px] bg-black w-full md:py-[30px] md:px-[108px] z-20" style={{ zIndex: 20 }}>
      <div className="md:grid grid-cols-2 md:grid-cols-1 justify-between gap-x-[50px] lg:gap-x-[150px] 2xl:gap-x-[325px] ">
        <section className=" md:hidden">
          <div>
          <div className="grid items-center md:flex md:w-full justify-between ">
            <div className=" text-white">
              <h3 className=" font-bold text-xl"> Get to our Newsletter </h3>
              <p className=" font-normal text-xs py-2"> Be the first to receive update when they roll out. </p>
              <div className="py-2 my-4 px-2 rounded-xl w-full flex bg-white justify-between">
              <input placeholder="Email Address" className=" focus:outline-none placeholder:text-black pl-2"/>
              <p className="py-2 rounded-2xl text-white px-6 bg-[#FF0909] "> Subscribe </p>
            </div>
            </div>

            
            <div className="">

            <div className="flex justify-between items-center pt-4">
          
            <ul className="mt-[20px] grid gap-6">
              <li>
                <Link href="" className="flex gap-4">
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
                <Link href="" className="flex gap-4">
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
                <Link href="" className="flex gap-4">
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
            <div className="py-2 my-4 px-2 rounded-xl w-full flex bg-white justify-between">
              <input placeholder="Email Address" className=" focus:outline-none placeholder:text-black pl-2"/>
              <p className="py-2 rounded-2xl text-white px-6 bg-[#FF0909] "> Subscribe </p>
            </div>
            <ul className="mt-[20px] flex gap-6 justify-center">
              <li>
                <Link href="" className="grid gap-4">
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
                <Link href="" className="grid gap-4">
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
                <Link href="" className="grid gap-4">
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
                <Link href="/">Our Vision</Link>
              </li>
              <li>
                <Link href="/about">Our Mission</Link>
              </li>              
            </ul>
          </div>

          <div>
            <p className="font-semibold text-[22px]">Blogs</p>
            <ul className="mt-[20px] flex flex-col gap-y-[15px]">
              <li>
                <Link href="/">Post #1</Link>
              </li>
              <li>
                <Link href="/about">Post #2</Link>
              </li>
              <li>
                <Link href="/invest">Post #3</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-[22px]">Career</p>
            <ul className="mt-[20px] flex flex-col gap-y-[15px]">
              <li>
                <Link href="/">Our Values</Link>
              </li>
              <li>
                <Link href="/about">Who We Are</Link>
              </li>
              <li>
                <Link href="/invest">Job Openings</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[22px]">Service</p>
            <ul className="mt-[20px] flex flex-col gap-y-[15px]">
              <li>
                <Link href="/privacy-policy">Graphic Design</Link>
              </li>
              <li>
                <Link href="/terms-of-use">UI/UX Design</Link>
              </li>

              <li>
                <Link href="/terms-of-use">Web Development</Link>
              </li>

              <li>
                <Link href="/terms-of-use">IT Services</Link>
              </li>

              <li>
                <Link href="/terms-of-use">Crypto Exchange</Link>
              </li>

              <li>
                <Link href="/terms-of-use">Virtual Assistance</Link>
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
