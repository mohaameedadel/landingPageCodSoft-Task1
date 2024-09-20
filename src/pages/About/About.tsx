import Header from "../../components/Header/Header";
import img from "../../assets/images/1.jpg";
import { CiMedal, CiStar } from "react-icons/ci";
import { PiTargetThin } from "react-icons/pi";
export default function About() {
  return (
    <>
      <div id="about" className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 py-10">
            <div className="img hidden lg:block">
              <img src={img} className="w-full block" alt="about us" />
            </div>
            <div className="info ">
              <Header text="About Our Company" />
              <p className="text-p text-center py-4">
                A tale of a fateful trip that started from this tropic port
                aboard this tiny ship today still wanted by the government they
                survive as soldiers of fortune to a deluxe apartment in the sky
                moving on up to the east side a family.
              </p>
              <p className="text-p text-center py-4">
                The government they survive as soldiers of fortune baby if
                you've ever wondered the east side to a deluxe apartment.
              </p>
              <div className="icons flex flex-wrap items-center justify-center py-6 border-[#dcdcdc] border-y">
                <div className="icon text-center px-8 py-6 ">
                  <CiStar className="mx-auto text-second text-6xl " />
                  <span className="text-h text-3xl font-semibold">Vision</span>
                </div>
                <div className="icon text-center px-8 py-6 ">
                  <CiMedal className="mx-auto text-second text-6xl" />
                  <span className="text-h text-3xl font-semibold">
                    Missions
                  </span>
                </div>
                <div className="icon text-center px-8 py-6">
                  <PiTargetThin  className="mx-auto text-second text-6xl" />
                  <span className="text-h text-3xl font-semibold">Goals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
