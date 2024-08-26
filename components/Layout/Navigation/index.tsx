"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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
      <header className="fixed w-full flex items-center justify-between px-2 md:px-12 lg:px-16 top-0 bg-black z-50">
        <Link href="/">
          <img
            src="/images/logo.svg"
            alt="logo"
            className="h-16 md:h-20"
          />
        </Link>

        <nav className="hidden sm:flex text-white w-full justify-end">
          <ul className="flex items-center space-x-8">
            <li><Link href="/" style={pathname === "/" ? active : {}}>Home</Link></li>
            <li><Link href="/about" style={pathname.includes("/about") ? active : {}}>About</Link></li>
            <li><Link href="/services" style={pathname.includes("/services") ? active : {}}>Services</Link></li>
            <li><Link href="/career" style={pathname.includes("/career") ? active : {}}>Career</Link></li>
            <li className="bg-[#FF0909] p-2 px-4 rounded-full shadow-lg">
              <Link href="/contact" style={pathname.includes("/contact") ? active : {}}>Contact us</Link>
            </li>
          </ul>
        </nav>

        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1"
          onClick={() => setHamburger(!hamburger)}
        >
          <div
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${hamburger ? 'transform rotate-45 translate-y-1.5' : ''}`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${hamburger ? 'opacity-0' : ''}`}
          />
          <div
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${hamburger ? 'transform -rotate-45 -translate-y-1.5' : ''}`}
          />
        </button>
      </header>

      <AnimatePresence>
        {hamburger && (
          <motion.ul
            className="fixed top-16 capitalize z-30 left-0 w-full h-screen bg-black text-white text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            {['/', '/about', '/services', '/career', '/contact'].map((href, index) => (
              <motion.li
                key={href}
                className={`py-4 ${href === '/contact' ? 'bg-red-600 mx-8 rounded-full shadow-lg' : ''}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }} // Delay for staggered effect
              >
                <Link href={href} onClick={() => setHamburger(false)}>
                  {href === '/' ? 'Home' : href.replace('/', '')}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};
