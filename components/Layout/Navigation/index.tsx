"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const active = {
  fontWeight: 700,
  paddingBottom: '7px',
  borderBottom: '1px solid black',
};

export const Navigation = () => {
  const [hamburger, setHamburger] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        className={`fixed w-full flex items-center justify-between px-[20px] top-0 md:px-[30px] gap-x-[60px] bg-black xl:px-[97px] z-50`}
      >
        <Link href={"/"}>
          <img
            src={"/images/logo.svg"}
            alt="logo"
            height={"120px"}
            width={"100px"}
            className='h-[70px] md:h-fit '
          />
        </Link>

        <nav className="w-[70%]  text-white xl:w-[55%] hidden sm:block">
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

{/* 
            <li>
              <Link
                href={"/blog"}
                style={pathname.includes("/blog") ? active : {}}
              >
                Blogs
              </Link>
            </li>
*/}

            <li>
              <Link
                href={"/career"}
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
          className="sm:hidden relative w-[45px] h-[35px] p-[4px] overflow-hidden"
          onClick={() => {
            setHamburger((prevVal: boolean) => !prevVal);
          }}
        >
          <div
            className={`w-full h-[3px] rounded-[15px] bg-white absolute z-50 ${
              hamburger ? "top-[50%] h-[10px]" : "top-[15%]"
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
        className={`flex flex-col fixed w-full z-50 ${
          hamburger ? "top-[70px] h-[100vh]" : "top-[-400%] h-fit"
        } text-center text-white bg-black left-0`}
        style={{ transition: "all 0.5s ease-in" }}
      >
        <li className="py-[10px] bg-black" onClick={() => {
            setHamburger((prevVal: boolean) => !prevVal);
          }}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className="py-[10px] bg-black" onClick={() => {
            setHamburger((prevVal: boolean) => !prevVal);
          }}>
          <Link href={"/about"}>About</Link>
        </li>
        <li className="py-[10px] bg-black" onClick={() => {
            setHamburger((prevVal: boolean) => !prevVal);
          }}>
          <Link href={"/services"} className="py-[10px]">
            Services
          </Link>
        </li>
        {/* 
        <li className="py-[10px] bg-black" onClick={() => {
            setHamburger((prevVal: boolean) => !prevVal);
          }}>
          <Link href={"/blog"} className="py-[10px]">
            Blogs
          </Link>
        </li>
        */}
        <li className="py-[10px] bg-black" onClick={() => {
            setHamburger((prevVal: boolean) => !prevVal);
          }}>
          <Link href={"/career"} className="py-[10px]">
            Career
          </Link>
        </li>
        <li className="bg-[#FF0909] mx-10 p-4 px-6 rounded-full shadow-2xl shadow-[#FF0909]">
          <Link
            href={"/contact"} 
            style={pathname.includes("/events") ? active : {}}
            onClick={() => {
              setHamburger((prevVal: boolean) => !prevVal);
            }}
          >
            Contact us
          </Link>
        </li>
      </ul>

      
    </>
  );
};
