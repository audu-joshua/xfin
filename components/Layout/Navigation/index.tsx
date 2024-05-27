"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";


const active = {
    fontWeight: 700,
    paddingBottom: "7px",
    borderBottom: "1px solid black",
  };

export function Navigation() {
    const [hamburger, setHamburger] = useState<boolean>(false);
    const pathname = usePathname();
  return (
    <>
      <header
        className="fixed w-full bg-black flex items-center justify-between sm:justify-start lg:justify-between top-0 px-[20px] md:px-[30px] gap-x-[60px] xl:px-[97px]"
        style={{ zIndex: 20 }}
      >
        <Link href={"/"}>
          <img
            src={"/images/logo.svg"}
            alt="logo"
            height={"120px"}
            width={"120px"}
          />
        </Link>

        <nav className="w-[70%] text-white xl:w-[55%] hidden sm:block">
          <ul className="flex text-base items-center gap-x-[30px] justify-between">
            <li>
              <Link href={"/"} style={pathname === "/" ? active : {}}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                style={pathname.includes("/about") ? active : {}}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/services"}
                style={pathname.includes("/services") ? active : {}}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={"/learning"}
                style={pathname.includes("/career") ? active : {}}
              >
                Career
              </Link>
            </li>
            <li className="bg-[#FF0909] p-4 px-8 rounded-full shadow-2xl shadow-[#FF0909]">
              <Link
                href={"/contact"}
                style={pathname.includes("/events") ? active : {}}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>


        <div
          className="sm:hidden relative w-[49px] h-[49px] p-[5px] overflow-hidden"
          onClick={() => {
            setHamburger((prevVal: boolean) => !prevVal);
          }}
        >
          <div
            className={`w-full h-[3px] rounded-[15px] bg-white absolute z-50 ${
              hamburger ? "top-[50%]" : "top-[15%]"
            } left-0`}
            style={
              hamburger
                ? { transform: "rotate(45deg)", transition: "all 0.3s linear" }
                : { transition: "all 0.3s linear" }
            }
          ></div>
          <div
            className="w-full h-[3px] rounded-[15px] bg-white absolute top-[50%] left-0"
            style={
              hamburger
                ? { left: "100%", transition: "all 0.3s linear" }
                : { transition: "all 0.3s linear" }
            }
          ></div>
          <div
            className={`w-full h-[3px] rounded-[15px] bg-white absolute ${
              hamburger ? "top-[50%]" : "top-[85%]"
            } left-0`}
            style={
              hamburger
                ? { transform: "rotate(-45deg)", transition: "all 0.3s linear" }
                : { transition: "all 0.3s linear" }
            }
          ></div>
        </div>
      </header>

      <ul
        className={`flex flex-col fixed w-full ${
          hamburger ? "top-[100px] h-[100vh]" : "top-[-400%] h-fit"
        } text-center text-white bg-black w-full h-[100vh] left-0`}
        style={{ transition: "all 0.5s ease-in" }}
      >
        <li className="py-[10px] bg-black">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="py-[10px] bg-black">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="py-[10px] bg-black">
          <Link href={"/services"} className="py-[10px]">
            Services
          </Link>
        </li>
        <li className="py-[10px] bg-black">
          <Link href={"/Career"} className="py-[10px]">
            Career
          </Link>
        </li>

        <li className="bg-[#FF0909] mx-10 p-4 px-6 rounded-full shadow-2xl shadow-[#FF0909]">
              <Link
                href={"/contact"}
                style={pathname.includes("/events") ? active : {}}
              >
                Contact us
              </Link>
            </li>
      </ul>
    </>
  );
}
