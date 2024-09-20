import Slider from "react-slick";

export default function Home() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <>
      <div className="slider-container  w-full ">
        <Slider {...settings} className="h-full">
          <div className="home h-screen ">
            <div className="container flex items-center sm:items-start justify-center flex-col h-full text-center sm:text-start">
              <p className="text-p mb-4 sm:text-2xl">
                The government they survive artical of fortune
              </p>
              <h2 className=" text-second text-4xl sm:text-6xl font-bold sm:w-5/6 ">
                We IMPROVE YOUR
              </h2>
              <h2 className=" text-second text-4xl sm:text-6xl font-bold sm:w-5/6 ">
                SALES EFFICIENCY
              </h2>
              <a
                href="#"
                type="button"
                className="  text-lg py-2.5 px-5 mt-12  font-medium text-second focus:outline-none bg-white  hover:bg-gray-100 hover:text-second focus:z-10 focus:ring-4 focus:ring-gray-100 "
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="home2 h-screen">
            <div className="container flex items-center sm:items-start justify-center flex-col h-full text-center sm:text-start">
              <p className="text-p mb-4 sm:text-2xl">
                The government they survive artical of fortune
              </p>
              <h2 className=" text-second text-4xl sm:text-6xl font-bold sm:w-5/6 ">
                We IMPROVE YOUR
              </h2>
              <h2 className=" text-second text-4xl sm:text-6xl font-bold sm:w-5/6 ">
                SALES EFFICIENCY
              </h2>
              <a
                href="#"
                type="button"
                className="  text-lg py-2.5 px-5 mt-12  font-medium text-second focus:outline-none bg-white  hover:bg-gray-100 hover:text-second focus:z-10 focus:ring-4 focus:ring-gray-100 "
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="home3 h-screen">
            <div className="container flex items-center sm:items-start justify-center flex-col h-full text-center sm:text-start">
              <p className="text-p mb-4 sm:text-2xl">
                The government they survive artical of fortune
              </p>
              <h2 className=" text-second text-4xl sm:text-6xl font-bold sm:w-5/6 ">
                We IMPROVE YOUR
              </h2>
              <h2 className=" text-second text-4xl sm:text-6xl font-bold sm:w-5/6 ">
                SALES EFFICIENCY
              </h2>
              <a
                href="#"
                type="button"
                className="  text-lg py-2.5 px-5 mt-12  font-medium text-second focus:outline-none bg-white  hover:bg-gray-100 hover:text-second focus:z-10 focus:ring-4 focus:ring-gray-100 "
              >
                Contact Us
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
