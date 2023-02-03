import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F79764] text-white py-4 justify-center bottom-0 w-full">
    
      <div className="container flex flex-col mx-auto text-center">
        <p className="">
          Copyright &copy; {new Date().getFullYear()} Puppers LLC.
        </p>
          <a
            href="https://github.com/The-Pupperz/The-Pupperz"
            className="text-white mx-auto hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          > <FaGithub/></a>
      </div>
    </footer>
  );
};

export default Footer;