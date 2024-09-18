import logo from "../../assets/images/logo.png";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMailOpen } from "react-icons/hi";
export default function FirstNav() {
  return (
    <>
      <div className="container py-8 ">
        <div className="flex justify-between items-center md:flex-col gap-4 lg:flex-row">
          <div className="logo w-36 mx-auto lg:mx-0">
            <img src={logo} className="w-full" alt="logo" />
          </div>
          <div className="info hidden md:flex justify-center items-center gap-4">
            <div className="flex justify-center items-center">
              <SlLocationPin className="text-4xl me-2 text-main" />
              <div className="">
                <span className="text-2xl text-h font-normal">Address:</span>
                <p className="text-p">2A0, Queenstown St, USA.</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <HiOutlineMailOpen className="text-4xl me-2 text-main" />
              <div className="">
                <span className="text-2xl text-h font-normal">Mail us:</span>
                <p className="text-p">supporthere@mail.com</p>
              </div>
            </div>
            <button
              type="button"
              className="uppercase text-base text-main hover:text-white duration-200 bg-white border-2 border-main focus:outline-none hover:bg-main focus:ring-4 focus:ring-gray-100 font-medium rounded-lg  px-5 py-3"
            >
              GET A QUOTES
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
