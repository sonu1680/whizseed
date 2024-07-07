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
      image: "/images/llpRegistration.png",
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
      image: "/images/fssi.png",
      title: "FSSAI License",
    },
    {
      image: "/images/nbfc.png",
      title: "NBFC Takeover",
    },
    {
      image: "/images/epr.png",
      title: "EPR Authorization",
    },
    {
      image: "/images/partnership.png",
      title: "Partnership Firm Registration",
    },
    {
      image: "/images/incometax.png",
      title: "Income Tax Return Filing",
    },
    {
      image: "/images/trademark.png",
      title: "Trademark Registartion",
    },
  ];
  return (
    <>
      <div className="flex bg-white h-[100%] w-full justify-center items-center flex-col p-0 lg:min-w-[1000px] "></div>
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
              <label className="input input-bordered flex items-center w-[550px] h-[58px] my-8 rounded-full bg-white shadow-2xl ">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                  type="text"
                  className=" bg-white grow flex flex-row pl-2 shadow-2xl"
                  placeholder="Go for service..."
                />
                <button className="bg-blue-800 w-[150px] h-[40px] rounded-full text-white font-inter mr-[-6px] flex justify-center items-center font-semibold text-sm  ">
                  Go for service{" "}
                  <img
                    src="images/arrow.png"
                    alt=""
                    className="w-6 h-6 font-bold  text-white  "
                  />
                </button>
              </label>
              <img
                src="/images/userslist.png"
                className="h-[55px] w-[300px] rounded-xl mt-[-20px] "
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
        <section className=" flex  flex-col justify-center w-full h-[60vh] items-center bg-white">
          <CompanyMarquee />

          <div className="container w-11/12 h-24 bg-blue-600 rounded-lg flex flex-row   justify-evenly items-center">
            <div className="container one w-72 h-20 gap-4  flex flex-row ">
              <div className="left flex justify-center items-center ">
                <img src="/images/wallet.png" alt="" className="w-14 h-10" />
              </div>
              <div className="right flex flex-col ">
                <p className=" text-white font-semibold font-inter text-lg ">
                  Reasonable
                </p>
                <p className=" text-white text-sm font-normal font-inter ">
                  Lowest price with professional service delivery
                </p>
              </div>
            </div>

            <div className="container two w-72 h-20 gap-4  flex flex-row ">
              <div className="left flex justify-center items-center ">
                <img
                  src="/images/supporthand.png"
                  alt=""
                  className="w-14 h-10"
                />
              </div>
              <div className="right flex flex-col ">
                <p className=" text-white font-semibold font-inter text-lg ">
                  Support
                </p>
                <p className=" text-white text-sm font-normal font-inter ">
                  Turn Around Time 99% of services will be delivered within
                  timeline
                </p>
              </div>
            </div>

            <div className="container three w-72 h-20 gap-4  flex flex-row ">
              <div className="left flex justify-center items-center ">
                <img
                  src="/images/ratinghand.png"
                  alt=""
                  className="w-14 h-10"
                />
              </div>
              <div className="right flex flex-col ">
                <p className=" text-white font-semibold font-inter text-lg ">
                  4.8/5 on Google rating
                </p>
                <p className=" text-white text-sm font-normal font-inter ">
                  99% of Customers rated us 5* in Google{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 
///////////////////////////////////////// */}

        <section className=" flex  flex-col justify-center w-full h-[60vh] items-center bg-white">
          <div className="title flex flex-row ">
            <p className="text-2xl sm:text-5xl font-inter text-black font-semibold pl-20  ">
              We Provide Best Quality
            </p>

            <p className="text-2xl sm:text-5xl font-inter text-blue-600 font-semibold ml-2 ">
              Services
            </p>
          </div>

          <div className="container justify-between items-center flex rounded-2xl h-80 w-11/12 flex-col mt-4 ">
            <div className="innerBox flex flex-wrap gap-4  h-80 flex-1 px-2 overflow-auto py-4 bg-white justify-center ">
              {data.map((item, index) => (
                <div
                  className=" group box bg-blue-50 w-80 h-20 flex flex-row font-semibold justify-between items-center rounded-lg  pl-3 border-2 border-white hover:bg-blue-600  transition ease-in-out  duration-200 shadow-sm  "
                  key={index}
                >
                  <div className="flex flex-row justify-center items-center  gap-1 ">
                    <img
                      src={item.image}
                      alt=""
                      className="h-10 w-10 text-red-200  "
                    />
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
              <div className=" group box  w-80 h-20 flex flex-row  justify-center items-center rounded-lg gap-3 pl-3  border-2 bg-blue-600  border-white hover:bg-blue-900 transition ease-in delay-20 ">
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="h-8 w-8 group-hover:h-8 group-hover:w-8 "
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
          <div className="containers flex flex-row justify-center items-center w-11/12 h-[450px] bg-white border border-gray-400  mt-16 rounded-2xl ">
            <div className="left flex flex-col w-1/2 justify-center items-center  px-20  ">
              <div className="flex flex-row text-center  ">
                <p className="text-4xl md:text-4xl font-inter font-bold text-black ">
                  Why Choose
                </p>
                <p className="md:text-4xl text-4xl font-inter font-bold text-blue-600 ml-2 ">
                  Whizseed
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
                className="w-[700px] h-28"
              />
            </div>

            <div className="right w-1/2 flex    justify-center items-center ">
              <div className="box h-[400px] w-[550px] bg-white  rounded-3xl p-6 flex flex-col  gap-y-14    ">
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

        <section className=" flex justify-center w-full h-[170vh] items-center bg-white flex-col relative ">
          <div className="container h-[135vh] w-11/12  mt-10 rounded-3xl  bg-white flex flex-col justify-start  items-center p-6 ">
            <div className="container flex flex-col justify-start items-center ">
              <p className="text-black text-5xl font-inter font-semibold">
                We <span className="text-blue-600">love to hear</span> from you
              </p>
              <span className=" text-black font-inter font-normal mt-6 ">
                WHIZSEED is the ultimate platform for aspiring entrepreneurs and
                startups. You can
              </span>
              <span className=" text-black font-inter font-normal  ">
                streamline your startup journey from ideation to execution.
              </span>
            </div>
            <img
              src="/images/arrow2.png"
              alt=""
              className="absolute top-28 left-[72%]     "
            />
            <img src="/images/flags.png" alt="" className="mt-4" />
            <img src="/images/map.png" alt="" className="mt-14  " />
          </div>

          <div className="container h-[200px] w-11/12  mt-10 rounded-3xl p-6 bg-gray-100 flex flex-row  px-20 hover:shadow-md hover:shadow-gray-400 transition-ease-in-out duration-100 ">
            <div className="left  w-3/4 pl-16 ">
              <p className="text-black font-inter font-semibold text-3xl">
                100+ Companies per Month choose us Are you next startup?
              </p>
              <button className="bg-blue-700 rounded-full p-2 px-10 py-[11px] mt-4 text-white font-inter font-semibold hover:bg-white border-2 border-blue-600 hover:text-blue-600 ">
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
