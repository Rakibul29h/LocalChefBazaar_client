import React from "react";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 min-h-[300px]">
      <Container>
        <div className="text-white flex justify-center py-5 sm:py-10 ">
          <div>
            <Logo></Logo>
            <span className="text-gray-100 text-sm">
              Empowering home cooks, one meal at a time.
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-3 text-center items-center md:text-left text-white gap-10 sm:gap-5">
          <div className="col-span-1">
            <div className="mt-5 text-sm">
              <address>House #12, Road #4, Dhanmondi, Dhaka – 1209</address>
              <span>Phone:+880 1700-000000</span>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-2">Working Hours</h3>
            <ul className="italic">
              <li>Sunday - Thursday: 10:00 AM - 10:00 PM</li>
              <li>Friday: 4:00 PM - 11:00 PM</li>
              <li>Saturday: 10:00 AM - 11:00 PM</li>
            </ul>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="flex gap-5 text-3xl ">
              <span className="hover:text-orange-500">
                <Link
                  to="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </Link>
              </span>
              <span className="hover:text-orange-500">
                 <Link
                  to="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
               <FaInstagramSquare />
                </Link>
              
              </span>
              <span className="hover:text-orange-500">
                 <Link
                  to="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <FaLinkedin />
                </Link>
                
              </span>
              <span className="hover:text-orange-500">
                 <Link
                  to="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   <FaYoutube />
                </Link>
               
              </span>
            </div>
          </div>
        </div>
        <div className="text-center text-white py-5">
            <span>
                © 2025 LocalChefBazaar. All Rights Reserved.

            </span>
            
        </div>
      </Container>
    </div>
  );
};

export default Footer;
