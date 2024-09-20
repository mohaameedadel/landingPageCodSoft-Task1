import Header from "../../components/Header/Header";
import icon1 from "../../assets/images/icons/5.png";
import icon2 from "../../assets/images/icons/6.png";
import icon3 from "../../assets/images/icons/7.png";
import icon4 from "../../assets/images/icons/8.png";
import icon5 from "../../assets/images/icons/9.png";
import icon6 from "../../assets/images/icons/10.png";
export default function Services() {
  return (
    <>
      <div id="services" className="py-16">
        <Header text={"Our services"} />
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-10">
            <div className="text-center p-4">
              <img
                src={icon1}
                className="mx-auto w-20 duration-500 hover:scale-[1.2] "
                alt="Business Services"
              />
              <h3 className="text-2xl font-bold my-2 text-h">
                Business Services
              </h3>
              <p className="text-p">
                The explore strange new worlds to seek fout new life and new
                civilizations to boldly where no man has before gone.
              </p>
            </div>
            <div className="text-center p-4">
              <img
                src={icon2}
                className="mx-auto w-20 duration-500 hover:scale-[1.2] "
                alt="Business Services"
              />
              <h3 className="text-2xl font-bold my-2 text-h">
                Business Services
              </h3>
              <p className="text-p">
                The explore strange new worlds to seek fout new life and new
                civilizations to boldly where no man has before gone.
              </p>
            </div>
            <div className="text-center p-4">
              <img
                src={icon3}
                className="mx-auto w-20 duration-500 hover:scale-[1.2] "
                alt="Business Services"
              />
              <h3 className="text-2xl font-bold my-2 text-h">
                Business Services
              </h3>
              <p className="text-p">
                The explore strange new worlds to seek fout new life and new
                civilizations to boldly where no man has before gone.
              </p>
            </div>
            <div className="text-center p-4">
              <img
                src={icon4}
                className="mx-auto w-20 duration-500 hover:scale-[1.2] "
                alt="Business Services"
              />
              <h3 className="text-2xl font-bold my-2 text-h">
                Business Services
              </h3>
              <p className="text-p">
                The explore strange new worlds to seek fout new life and new
                civilizations to boldly where no man has before gone.
              </p>
            </div>
            <div className="text-center p-4">
              <img
                src={icon5}
                className="mx-auto w-20 duration-500 hover:scale-[1.2] "
                alt="Business Services"
              />
              <h3 className="text-2xl font-bold my-2 text-h">
                Business Services
              </h3>
              <p className="text-p">
                The explore strange new worlds to seek fout new life and new
                civilizations to boldly where no man has before gone.
              </p>
            </div>
            <div className="text-center p-4">
              <img
                src={icon6}
                className="mx-auto w-20 duration-500 hover:scale-[1.2] "
                alt="Business Services"
              />
              <h3 className="text-2xl font-bold my-2 text-h">
                Business Services
              </h3>
              <p className="text-p">
                The explore strange new worlds to seek fout new life and new
                civilizations to boldly where no man has before gone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
