import { FaPhoneVolume } from "react-icons/fa";
import post1 from "../../assets/images/posts/1 (2).jpg";
import post2 from "../../assets/images/posts/2 (2).jpg";
import { TiCalendarOutline } from "react-icons/ti";
import { GoDot } from "react-icons/go";
export default function Footer() {
  return (
    <>
      <div className="footer py-16 bg-second text-white">
        <div className="container ">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="">
              <h2 className="text-xl font-semibold mb-6">
                About OUR Consulting
              </h2>
              <p className="text-p mb-6">
                That started from this tropic port aboard this tiny ship today
                still want by theam government they survive on up to thetre east
                side to a deluxe as soldiers of artics fortune.
              </p>
              <p className=" flex justify-start items-center gap-2 text-base">
                <FaPhoneVolume /> Any Queries : (+20) 114 378 7573
              </p>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mb-6">RECENT POSTS</h2>

              <div className="flex flex-row items-center border-b border-p py-2">
                <img
                  className="block  rounded-lg w-20 "
                  src={post1}
                  alt="post"
                />
                <div className="flex flex-col justify-between p-4">
                  <h5 className="mb-2 font-semibold ">
                    Noteworthy technology acquisitions 2021.
                  </h5>
                  <p className="  text-p flex justify-start items-center gap-2 text-base">
                    <TiCalendarOutline /> Feb 06, 2018
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center py-2 ">
                <img
                  className="block  rounded-lg w-20 "
                  src={post2}
                  alt="post"
                />
                <div className="flex flex-col justify-between p-4">
                  <h5 className="mb-2 font-semibold ">
                    World don't move to beat of just one drum.
                  </h5>
                  <p className="  text-p flex justify-start items-center gap-2 text-base">
                    <TiCalendarOutline /> Mar 20, 2018
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mb-6">SOLUTIONS</h2>
              <ul>
                <li className="flex justify-start items-center gap-2 mb-2 text-p hover:text-white duration-500 cursor-pointer font-medium">
                  <GoDot /> Travel and Aviation
                </li>
                <li className="flex justify-start items-center gap-2 mb-2 text-p hover:text-white duration-500 cursor-pointer font-medium">
                  <GoDot /> Business Services
                </li>
                <li className="flex justify-start items-center gap-2 mb-2 text-p hover:text-white duration-500 cursor-pointer font-medium">
                  <GoDot /> Consumer Products
                </li>
                <li className="flex justify-start items-center gap-2 mb-2 text-p hover:text-white duration-500 cursor-pointer font-medium">
                  <GoDot /> Financial Services
                </li>
                <li className="flex justify-start items-center gap-2 mb-2 text-p hover:text-white duration-500 cursor-pointer font-medium">
                  <GoDot /> Software Research
                </li>
                <li className="flex justify-start items-center gap-2 text-p hover:text-white duration-500 cursor-pointer font-medium">
                  <GoDot /> Quality Resourcing
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mb-6">SOLUTIONS</h2>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_name"
                  id="floating_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-p peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-p  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-p peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-p  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <button
                type="button"
                className=" text-sm rounded py-2.5 px-5 mt-4  font-medium text-second  bg-white  hover:bg-main hover:text-white duration-500"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
