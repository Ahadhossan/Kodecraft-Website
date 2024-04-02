import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { CustomButton, TextInput } from "./";
import { footerLinks } from "./data";

const Footer = () => {
  return (
    <footer className='text-gray-700'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap justify-between w-full gap-10 -mx-4 -mb-10'>
          {footerLinks.map(({ id, title, links }) => (
            <div className='w-auto px-4'>
              <h2 className='mb-3 text-sm font-medium tracking-widest text-gray-900'>
                {title}
              </h2>

              <div className='flex flex-col gap-3 mb-10'>
                {links.map((link, index) => (
                  <Link
                    href='#'
                    key={index}
                    className='text-gray-800 hover:text-gray-700'
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className='w-auto px-4'>
            <h2 className='mb-3 text-sm font-semibold tracking-widest text-gray-800'>
              Get in Touch
            </h2>
            <div className='flex flex-col gap-3 mb-10 text-gray-900'>
              <p>+91 7987 464 867</p>
              <p>support@kodecraft.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className='py-4 border-t border-gray-200 '>
        <p className='container px-5 mx-auto mt-2 text-gray-500'>
          Subscribe to our Newsletter
        </p>

        <div className='container flex flex-wrap items-center justify-between px-5 pt-6 pb-8 mx-auto'>
          <div className='flex justify-center w-full md:w-2/4 lg:w-1/3 md:justify-start '>
            <TextInput
              styles='w-full flex-grow md:w-40 bg-gray-100 sm:mr-4 mr-2'
              placeholder='Email address'
              type='text'
            />

            <CustomButton
              title='Subscribe'
              containerStyles={`block bg-[#3b81f5] text-white px-6 py-2.5 text-md rounded hover:bg-blue-800 focus:outline-none flex-col items-center`}
            />
          </div>

          <span className='inline-flex justify-center w-full mt-6 lg:ml-auto lg:mt-0 md:justify-start md:w-auto'>
            <a className='text-xl text-gray-500 duration-300 ease-in-out hover:text-blue-600 hover:scale-125'>
              <FaFacebookF />
            </a>
            <a className='ml-3 text-xl text-gray-500 duration-300 ease-in-out hover:text-blue-500 hover:scale-125'>
              <FaTwitter />
            </a>
            <a className='ml-3 text-xl text-gray-500 duration-300 ease-in-out hover:text-pink-600 hover:scale-125'>
              <FiInstagram />
            </a>

            <a className='ml-3 text-xl text-gray-500 duration-300 ease-in-out hover:text-blue-600 hover:scale-125'>
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>

      <div className='bg-[#001a36]'>
        <div className='container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row'>
          <p className='text-sm text-center text-gray-300 sm:text-left'>
            &copy; 2024 KodeCraft Solutions —
            <Link
              href='#'
              className='text-[#1199e7] ml-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              @Ahad
            </Link>
          </p>

          <span className='w-full mt-2 text-sm text-center text-gray-300 sm:ml-auto sm:mt-0 sm:w-auto sm:text-left'>
            Designed by Ahad Hossain
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
