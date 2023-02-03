import React from "react";

const Footer = () => {
  return (
    <footer className="bg-#F79764 text-white py-4">
      <div className="container mx-auto">
        <p className="text-center">
          <a
            href="https://github.com/The-Pupperz/The-Pupperz"
            className="text-white hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit our Github page
          </a>
          <span className="mx-2">|</span>
          Copyright &copy; {new Date().getFullYear()} Puppers LLC.
        </p>
      </div>
    </footer>
  );
};

export default Footer;