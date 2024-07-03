import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
  faCircleArrowRight,
  faBuilding,
  faUsersRays,
} from "@fortawesome/free-solid-svg-icons";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import NewsLetter from "../../components/newsLetter";
import Review from "../../components/review";
import CompanyMarquee from "../../components/companyMarque";
import OtherServices from "../../components/otherServices";

const Home = () => {
  const data = [
    {
      image: "/images/gst.png",
      title: "GST Registration",
    },
    {
      image: "images/msme.png",
      title: "MSME Registration",
    },
    {
      image: "/images/llp.png",
      title: "LLP Registration Online",
    },
    {
      image: "/images/cfo.png",
      title: "Virtual CFO Service",
    },
    {
      image: "/images/company.png",
      title: "Company Registration",
    },
    {
      image: "/images/gst.png",
      title: "FSSAI License",
    },
    {
      image: "/images/gst.png",
      title: "NBFC Takeover",
    },
    {
      image: "/images/gst.png",
      title: "EPR Authorization",
    },
  ];
 return (
    <>
      <div className="flex bg-white h-[100%] w-full justify-center items-center flex-col p-0 lg:min-w-[1000px] ">

</div>
      <div className="flex bg-white h-[100%] w-full justify-center items-center flex-col p-0 min-w-[1000px] ">
        <section className="h-[500px] w-11/12 bg-blue-50 mt-36 rounded-xl flex flex-row justify-between items-center  p-12 ">
          <div className="left ">
            <div>
              <p className="text-5xl font-semibold text-blue-500 ">
                One-Stop Destinatio
              </p>
              <p className="text-5xl font-semibold text-black py-3">
                For All Services
              </p>
              <p className="text-4xl font-medium text-gray-500">
                {
                  <Typewriter
                    words={[
                      "LLP Registration",
                      "Limited Company",
                      "Trademark Assignment",
                      "GST Registration",
                      "Partnership Firm Registration",
                      "EPR Authorization",
                      "Start Compliance Service",
                      "Limited Company",
                    ]}
                    loop={5}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={100}
                    delaySpeed={400}
                  />
                }
              </p>
              <label className="input input-bordered flex items-center w-[550px] h-[50px] my-8 rounded-full bg-white shadow-2xl ">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                  type="text"
                  className=" bg-white grow flex flex-row pl-2 shadow-2xl"
                  placeholder="Go for service..."
                />
                <button className="bg-blue-800 w-[140px] h-[40px] rounded-full text-white font-inter mr-[-6px] ">
                  Go fro service <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </label>
              <img
                src="/images/userslist.png"
                className="h-[40px] w-[220px] rounded-xl mt-[-20px] "
                alt=""
              />
              <p className="text-black font-poppins font-medium font-inter mt-2">
                Trusted by 6400+ studets, including designers from:
              </p>

              <OtherServices />
            </div>
          </div>

          {/* left side */}

          <div className="right ">
            <img
              className="h-[80%] w-[480px] rounded-3xl "
              src="https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />

            <div className="mover   w-44 h-14 relative bg-white rounded-full flex justify-center items-center animate-moving bottom-6 left-20">
              <div className="left w-1/2 h-12 flex justify-center items-center ">
                <div className="bg-blue-600 rounded-full p-2 px-2.5">
                  <FontAwesomeIcon
                    icon={faUsersRays}
                    className="w-6 h-6 text-white"
                  />
                </div>
              </div>
              <div className="right w-full">
                <p className="font-inter font-semibold">100+</p>
                <p className="text-black font-inter font-semibold">
                  CA & Lawyer
                </p>
              </div>
            </div>

            <div className="mover w-44 h-14 relative hidden lg:inline-flex bg-white rounded-full  justify-center items-center animate-moving bottom-56 left-[80%]">
              <div className="left w-1/2 h-12 flex justify-center items-center ">
                <div className="bg-blue-600 rounded-full p-2 px-2.5">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="w-6 h-6 text-white"
                  />
                </div>
              </div>
              <div className="right w-full">
                <p className="font-inter font-semibold">10+</p>
                <p className="text-black font-inter font-semibold">Offices</p>
              </div>
            </div>
          </div>
        </section>

        {/* ////////////////////////////////////////////////// */}
        <CompanyMarquee />
        {/* 
///////////////////////////////////////// */}

        <section className=" flex justify-center items-center bg-white">
          <div className="container justify-between items-center flex bg-blue-600 rounded-2xl h-80 w-11/12 ">
            <p className="text-3xl sm:text-5xl font-inter text-white font-semibold pl-20  ">
              We Provide Best <br /> Quality Services
            </p>

            <div className="innerBox flex flex-wrap gap-4  h-80 flex-1 px-2 overflow-auto py-4 justify-center ">
              {data.map((item, index) => (
                <div
                  className=" group box bg-white w-60 h-20 flex flex-row font-semibold justify-between items-center rounded-lg  pl-3 border-2 border-white hover:bg-transparent  transition ease-in-out delay-10  "
                  key={index}
                >
                  <div className="flex flex-row justify-center items-center gap-1">
                    <img src={item.image} alt="" className="h-10 w-10" />
                    <p className="text-black text-sm font-inter ">
                      {item.title}
                    </p>
                  </div>

                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className="mt-12 mr-[7px] invisible group-hover:visible "
                  />
                </div>
              ))}
              <div className=" group box  w-60 h-20 flex flex-row  justify-center items-center rounded-lg gap-3 pl-3 bg-transparent border-2 border-white hover:bg-blue-950 transition ease-in delay-20 ">
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="h-8 w-8 group-hover:h-10 group-hover:w-10 "
                />
                <p className="text-white text-medium font-inter font  ">
                  See All Services
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*         
////////////////////////////////////////////////////////// */}

        <section className=" flex justify-center w-full items-center bg-white">
          <div className="containers flex flex-row justify-center items-center w-11/12 h-[450px] bg-gray-100 mt-16 rounded-2xl ">
            <div className="left flex flex-col w-1/2 justify-center items-center  px-20  ">
              <div className="flex flex-row text-center ">
                <p className="text-4xl md:text-5xl font-inter font-bold text-black ">
                  Why Choose?
                  <p className="md:text-5xl text-4xl font-inter font-bold text-blue-600 ">
                    Whizseed
                  </p>
                </p>
              </div>
              <span className="font-inter font-normal text-sm text-left  text-black mt-8">
                WHIZSEED is a technology-driven platform which provides
                professional service in India. We strive to provide best service
                to our customers:
              </span>
              <img
                src="/images/features.png"
                alt=""
                className="w-[500px] h-32"
              />
            </div>

            <div className="right w-1/2 flex    justify-center items-center ">
              <div className="box h-[400px] w-[550px] bg-white  rounded-3xl p-6 flex flex-col  gap-y-14 shadow-md shadow-gray-400 hover:shadow-[rgba(0,0,255,0.1)_0px_10px_1px_0px]   ">
                <div className="title flex flex-row  h-8 w-full justify-start ">
                  <img
                    src="/images/correct.png"
                    alt=""
                    className="h-4 w-4 mt-2"
                  />
                  <span className="text-black font-bold ml-2   ">
                    Expert Guidance:{" "}
                    <span className="font-normal font-inter">
                      Benefit from our seasoned experts who provide tailored
                      advice for your specific business goals to achive your
                      dream.
                    </span>
                  </span>
                </div>

                <div className="title flex flex-row  h-8 w-full justify-start ">
                  <img
                    src="/images/correct.png"
                    alt=""
                    className="h-4 w-4 mt-2"
                  />
                  <span className="text-black font-bold ml-2  ">
                    Comprehensive Services:{" "}
                    <span className="font-normal font-inter">
                      We offer a wide range of services, from company
                      registration to financial planning, to meet all your
                      business needs.
                    </span>
                  </span>
                </div>

                <div className="title flex flex-row  h-8 w-full justify-start  ">
                  <img
                    src="/images/correct.png"
                    alt=""
                    className="h-4 w-4 mt-2"
                  />
                  <span className="text-black font-bold ml-2">
                    Customized Solutions:{" "}
                    <span className="font-normal font-inter">
                      Our solutions are designed to address your unique
                      challenges, ensuring your business thrives in the Indian
                      market.
                    </span>
                  </span>
                </div>

                <div className="title flex flex-row  h-8 w-full justify-start  ">
                  <img
                    src="/images/correct.png"
                    alt=""
                    className="h-4 w-4 mt-2"
                  />
                  <span className="text-black font-bold ml-2">
                    Regulatory Compliance:{" "}
                    <span className="font-normal font-inter">
                      Stay on top of ever-changing regulations with our
                      assistance, minimizing legal hassles for your business.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
/////////////////////////////////////////// */}

        <section className=" flex justify-center w-full items-center bg-white flex-col ">
          <div className="container h-[450px] w-11/12  mt-10 rounded-3xl p-6 ">
            <img
              src="/images/global.png"
              alt=""
              className="w-full h-full rounded-3xl "
            />
          </div>

          <div className="container h-[200px] w-11/12  mt-10 rounded-3xl p-6 bg-gray-100 flex flex-row  px-20">
            <div className="left  w-3/4 pl-16 ">
              <p className="text-black font-inter font-semibold text-3xl">
                100+ Companies per Month choose us Are you next startup?
              </p>
              <button className="bg-blue-700 rounded-full p-2 px-8 mt-4 text-white font-inter">
                Get Started
              </button>
            </div>
            <div className="right   flex justify-center items-center w-1/2 ">
              <img
                src="/images/girl.png"
                alt=""
                className="h-[150px] w-[160px]"
              />
            </div>
          </div>
        </section>

        {/* //////////     Review    /////////////////// */}

        <Review />

        {/* //////////////////////  Newsletter  ////////////////////////// */}

        <NewsLetter />
      </div>
    </>
  );
};


export default Home;
