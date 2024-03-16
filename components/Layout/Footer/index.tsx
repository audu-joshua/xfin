import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
export function Footer() {
  return (
    <footer className="p-[20px] bg-[#FB2B30] w-full md:py-[77px] md:px-[108px]">
      <div className="lg:grid grid-cols-2 justify-between gap-x-[50px] lg:gap-x-[150px] 2xl:gap-x-[325px]">
        <section>
          <div className="flex items-center">
            <Image
              src={"/images/footerLogo.svg"}
              alt="logo"
              height={85}
              width={85}
            />
            <div className="font-[800] text-[20px] text-white">
              <p>Xfin</p>
              <p>Enterprise</p>
            </div>
          </div>
          {/**   
          <div className="text-white mt-[30px]">
            <p className="font-[700] text-[20px]">
              Creating wealth, building communities
            </p>
            <p>
              We focus on personal and professional development through mindset
              and investing, so you can grow with confidence.
            </p>
          </div>
  **/}
          
        </section>
        <section className="text-white grid grid-cols-3 gap-x-[15px] sm:gap-x-[30px] mt-[73px] lg:mt-0">
          <div>
            <p className="font-semibold text-[18px]">Quick Links</p>
            <ul className="mt-[20px] flex flex-col gap-y-[15px]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/invest">Services</Link>
              </li>{" "}
              <li>
                <Link href="/learning">Career</Link>
              </li>
              
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[18px]">Follow Us</p>
            <ul className="mt-[20px] flex flex-col gap-y-[15px]">
              <li>
                <Link href="">
                  <div className="flex items-center gap-x-[10px] sm:gap-x-[15px]">
                    <img
                      src="/images/instagram.svg"
                      alt="instagram"
                      width={"24px"}
                      height={"24px"}
                    />
                    <p>Instagram</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="">
                  {" "}
                  <div className="flex items-center gap-x-[10px] sm:gap-x-[15px]">
                    <img
                      src="/images/linkedin.svg"
                      alt="Linkedin"
                      width={"24px"}
                      height={"24px"}
                    />
                    <p>LinkedIn</p>
                  </div>
                </Link>
              </li>
              
              <li>
                <Link href="">
                  {" "}
                  <div className="flex items-center gap-x-[10px] sm:gap-x-[15px]">
                    <img
                      src="/images/facebook.svg"
                      alt="facebook"
                      width={"24px"}
                      height={"24px"}
                    />
                    <p>Facebook</p>
                  </div>
                </Link>
              </li>
              
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[18px]">Legal</p>
            <ul className="mt-[20px] flex flex-col gap-y-[15px]">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-use">Terms of Use</Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div
        className="py-[18px] flex justify-center mt-[130px]"
        style={{ borderTop: "1px solid #8B8B8B" }}
      >
        <p className="font-medium text-white">&copy; Xfin Enterprise</p>
      </div>
    </footer>
  );
}
