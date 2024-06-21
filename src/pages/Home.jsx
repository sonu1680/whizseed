import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
  faCircleArrowRight,
  faArrowAltCircleRight
} from "@fortawesome/free-solid-svg-icons";
import Marquee from "react-fast-marquee";
const Home = () => {
  const data = [
    {
      image: "../assets/gst.png",
      title: "GST Registration",
    },
    {
      image: "../assets/msme.png",
      title: "MSME Registration",
    },
    {
      image: "../assets/llp.png",
      title: "LLP Registration Online",
    },
    {
      image: "../assets/cfo.png",
      title: "Virtual CFO Service",
    },
    {
      image: "../assets/gscompanyt.png",
      title: "Company Registration",
    },
    {
      image: "../assets/gst.png",
      title: "FSSAI License",
    },
    {
      image: "../assets/gst.png",
      title: "NBFC Takeover",
    },
    {
      image: "../assets/gst.png",
      title: "EPR Authorization",
    },
   
  ];
  return (
    <>
      <div className="flex bg-white h-[100vh] w-full justify-center flex-col  ">
        <section className="h-[500px] w-11/12 bg-blue-50 mt-10 rounded-xl flex flex-row justify-between items-center  p-12">
          <div className="left ">
            <div>
              <p className="text-5xl font-semibold text-blue-500 ">
                One-Stop Destinatio
              </p>
              <p className="text-5xl font-semibold text-black py-3">
                For All Services
              </p>
              <p className="text-4xl font-medium text-gray-500">
                Trademark Registration
              </p>
              <label className="input input-bordered flex items-center w-[550px] h-[50px] my-8 rounded-full bg-white shadow-2xl ">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                  type="text"
                  className=" bg-white grow flex flex-row pl-2 shadow-2xl"
                  placeholder="Go for service..."
                />
                <button className="bg-blue-800 w-[140px] h-[40px] rounded-full text-white font-Inter mr-[-6px] ">
                  Go fro service <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </label>
              <img
                src="../assets/userslist.png"
                className="h-[40px] w-[220px] rounded-xl mt-[-20px] "
                alt=""
              />
              <p className="text-black font-poppins font-medium font-inter mt-2">
                Trusted by 6400+ studets, including designers from:
              </p>

              <div className="service mt-4 flex flex-row gap-2">
                <div className="one  w-max p-2  flex  rounded-full justify-center items-center border border-black text-black font-inter text-sm font-medium hover:border-blue-300 hover:bg-blue-300 ">
                  Start compliance Services
                </div>
                <div className="one  w-max p-2  flex  rounded-full justify-center items-center border border-black text-black font-inter text-sm font-medium hover:border-blue-300 hover:bg-blue-300 ">
                  Privated Limited
                </div>
                <div className="one  w-max p-2  flex  rounded-full justify-center items-center border border-black text-black font-inter text-sm font-medium hover:border-blue-300 hover:bg-blue-300 ">
                  Start My Bussiness
                </div>
              </div>

              <div className="service mt-4 flex flex-row gap-2">
                <div className="one  w-max p-2  flex  rounded-full justify-center items-center border border-black text-black font-inter text-sm font-medium hover:border-blue-300 hover:bg-blue-300 ">
                  TradeMark Assignment
                </div>
                <div className="one  w-max p-2  flex  rounded-full justify-center items-center border border-black text-black font-inter text-sm font-medium hover:border-blue-300 hover:bg-blue-300 ">
                  Company Registration
                </div>
              </div>
            </div>
          </div>

          {/* left side */}

          <div className="right ">
            <img
              className="h-[80%] w-[480px] rounded-3xl "
              src="https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </section>

        <section className="h-40 w-full px-14  flex justify-center items-center rounded">
          <Marquee speed={400}>
            <img
              className="h-32 w-full rounded-3xl "
              src="../assets/companyLogos.png"
              alt=""
            />
          </Marquee>
        </section>

        <section className=" flex justify-center items-center bg-white">
          <div className="container justify-between items-center flex bg-blue-600 rounded-2xl h-80 w-11/12 ">
            <p className="text-5xl font-inter text-white font-semibold pl-20 ">
              We Provide Best <br /> Quality Services
            </p>

            <div className="innerBox flex flex-wrap gap-4 w-7/12  px-2 ">
              {data.map((item) => (
                <div className="box bg-white w-60 h-20 flex flex-row font-semibold justify-start items-center rounded-lg gap-3 pl-3 border-2 border-white hover:bg-transparent ">
                  <img src={item.image} alt="" className="h-10 w-10" />
                  <p className="text-black text-sm font-inter ">
                    {item.title}
                  </p>
                </div>
              ))}
              <div className="box bg-white w-60 h-20 flex flex-row  justify-center items-center rounded-lg gap-3 pl-3 bg-transparent border-2 border-white hover:bg-blue-950 ">
                <FontAwesomeIcon icon={faCircleArrowRight} className="h-8 w-8"  />
                <p className="text-white text-medium font-inter font ">See All Services</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
