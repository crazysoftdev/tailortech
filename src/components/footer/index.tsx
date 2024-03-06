import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub  } from 'react-icons/fa';
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full py-6 mb-20 mt-20 border-2">
      <div className="max-w-screen-lg mx-auto px-4 flex justify-between items-center">
        <div>
        <aside className="flex items-center gap-2">
        <Image
          src={'/assets/code.png'}
          width={40}
          height={40}
          alt="logo"
        />
          <h2 className="text-xl font-bold">TailorTech</h2>
          </aside>
          <p>Contact us: info@tailortech.com</p>
        </div>
        <div>
        <div className="flex space-x-6 py-2">
          <Link href="https://facebook.com"
            className="hover:text-blue-700">
              <FaFacebookF size={22}/>
          </Link>
          <Link href="https://twitter.com"
            className="hover:text-blue-300">
              <FaTwitter size={22}/>
          </Link>
          <Link href="https://instagram.com"
            className="hover:text-pink-500">
              <FaInstagram size={22}/>
          </Link>
          <Link href="https://www.linkedin.com/in/jeffjiang13"
            className="hover:text-blue-500">
            <FaLinkedinIn size={22}/>
            </Link>
            <Link href="https://github.com/jeffjiang13"
            className="hover:text-gray-500">
            <FaGithub size={22}/>
          </Link>
        </div>
          <p>&copy; {new Date().getFullYear()} TailorTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
