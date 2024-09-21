import Slider from "react-slick";
import p1 from "../../assets/images/pattern/p-1.png";
import p2 from "../../assets/images/pattern/p-2.png";
import p3 from "../../assets/images/pattern/p-3.png";
import p4 from "../../assets/images/pattern/p-4.png";
import p5 from "../../assets/images/pattern/p-5.png";
export default function OurPatern() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="ourPatern py-4 bg-[#F8FAFF]">
        <div className="container">
          <div className="flex flex-col sm:flex-row ">
            <h2 className=" sm:w-1/6 text-2xl font-semibold  uppercase flex items-center justify-center sm:justify-start mb-4 sm:mb-0">Our PARTNERS</h2>
            <div className="slider-container sm:w-5/6 ">
              <Slider {...settings}>
                <div className="focus:outline-none " >
                  <img src={p1} className="mx-auto" alt="pattern" />
                </div>
                <div className="focus:outline-none">
                  <img src={p2} className="mx-auto" alt="pattern" />
                </div>
                <div className="focus:outline-none">
                  <img src={p3} className="mx-auto" alt="pattern" />
                </div>
                <div className="focus:outline-none">
                  <img src={p4} className="mx-auto" alt="pattern" />
                </div>
                <div className="focus:outline-none">
                  <img src={p5} className="mx-auto" alt="pattern" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
