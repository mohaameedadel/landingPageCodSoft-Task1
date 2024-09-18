import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt1 } from "react-icons/hi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialPinterest,
  TiSocialTwitter,
} from "react-icons/ti";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="px-10">
        <div className="container bg-[#000F32] px-0">
          <nav className="px-0">
            <div className=" flex  flex-wrap items-center justify-between mx-auto p-4">
              <div className="flex w-full md:w-auto justify-between items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  onClick={() => setShow(!show)}
                  data-collapse-toggle="navbar-cta"
                  type="button"
                  className="inline-flex  items-center p-2 w-10 h-10 justify-center text-sm hover:bg-white/10 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 "
                  aria-controls="navbar-cta"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <HiMenuAlt1 className="text-white text-xl" />
                </button>
                <div
                  className="icons  flex justify-center items-center order-3 "
                >
                  <TiSocialFacebook className="text-white me-1 cursor-pointer" />
                  <TiSocialTwitter className="text-white me-1 cursor-pointer" />
                  <TiSocialLinkedin className="text-white me-1 cursor-pointer" />
                  <TiSocialPinterest className="text-white me-1 cursor-pointer" />
                  <div className="px-4 py-4 border-x border-gray-400">
                    <BsCartPlus className="text-white cursor-pointer" />
                  </div>
                  <CiSearch className="text-white ms-1 cursor-pointer" />
                </div>
              </div>

              <div
                className={`items-center justify-between ${
                  show ? "block" : "hidden"
                } w-full md:flex md:w-auto md:order-1`}
                id="navbar-cta"
              >
                <ul className=" flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                  <li>
                    <a
                      href="#"
                      className="block py-2   text-white "
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2   text-white ">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2  text-white ">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 text-white ">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2   text-white ">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2   text-white ">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}


