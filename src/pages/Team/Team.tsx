import Header from "../../components/Header/Header";
import team1 from "../../assets/images/team/1 (1).jpg";
import team2 from "../../assets/images/team/2 (1).jpg";
import team3 from "../../assets/images/team/3.jpg";
import team4 from "../../assets/images/team/4.jpg";
export default function Team() {
  return (
    <>
      <div id="team" className="py-16">
        <Header text={"Our team"} />
        <p className="text-p text-center mt-8">
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today stillers
        </p>
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10">
            <div className=" bg-white border border-gray-200 rounded-lg shadow ">
              <div>
                <img
                  className="rounded-t-lg block w-full"
                  src={team1}
                  alt="team"
                />
              </div>
              <div className="p-3">
                <a href="#">
                  <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-h ">
                    Richards Mills
                  </h5>
                </a>
                <p className="mb-3 text-center font-normal text-p ">
                  Sales Consultant
                </p>
              </div>
            </div>
            <div className=" bg-white border border-gray-200 rounded-lg shadow ">
              <div>
                <img
                  className="rounded-t-lg block w-full"
                  src={team2}
                  alt="team"
                />
              </div>
              <div className="p-3">
                <a href="#">
                  <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-h ">
                    Mike Hussey
                  </h5>
                </a>
                <p className="mb-3 text-center font-normal text-p ">
                  Founder, CEO
                </p>
              </div>
            </div>
            <div className=" bg-white border border-gray-200 rounded-lg shadow ">
              <div>
                <img
                  className="rounded-t-lg block w-full"
                  src={team3}
                  alt="team"
                />
              </div>
              <div className="p-3">
                <a href="#">
                  <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-h ">
                    Jenilia D’sosa
                  </h5>
                </a>
                <p className="mb-3 text-center font-normal text-p ">
                  Marketing Lead
                </p>
              </div>
            </div>
            <div className=" bg-white border border-gray-200 rounded-lg shadow ">
              <div>
                <img
                  className="rounded-t-lg block w-full"
                  src={team4}
                  alt="team"
                />
              </div>
              <div className="p-3">
                <a href="#">
                  <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-h ">
                    David Warner
                  </h5>
                </a>
                <p className="mb-3 text-center font-normal text-p ">
                  SEO Analyst
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
