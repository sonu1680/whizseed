import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
  faCircleArrowRight,
  faBuilding,
  faUsersRays,
  faFileContract,
  faHandHoldingDollar,
  faPhoneVolume,
  faFaceAngry,
  faHeadphones,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import NewsLetter from "../../components/newsLetter";
import Review from "../../components/review";
import CompanyMarquee from "../../components/companyMarque";
import OtherServices from "../../components/otherServices";
import Faq from "../../components/faq";
import Consult from "../../components/consult";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const data = [
  {
    title: "India's No.1 Legal Platform",
    desc: "Get the leagl consilt from us free of cost. Get the leagl consilt from us free of cost.",
    icon: faFileContract,
  },
  {
    title: "Get Legal Advice",
    desc: "Get the leagl consilt from us free of cost. Get the leagl consilt from us free of cost.",
    icon: faHandHoldingDollar,
  },
  ,
  {
    title: "Contact a Lawyer",
    desc: "Get the leagl consilt from us free of cost. Get the leagl consilt from us free of cost.",
    icon: faPhoneVolume,
  },
];

const Contact = () => {
  return (
    <>
      <div className="flex bg-white h-[100%] w-full justify-center items-center flex-col min-w-[1000px]  ">
        <section
          className="h-[50vh] w-full bg-blue-500  hero flex flex-row justify-between items-center  mt-20  "
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/5313173/pexels-photo-5313173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className="h-[50vh] w-full  hero flex flex-col  justify-center items-center bg-opacity-85 bg-blue-900  p-8 px-24">
            <div className="texts flex flex-col justify-center items-center w-[500px] text-center gap-5">
              <p className="text-5xl font-inter font-semibold text-white ">
                Who We Are
              </p>
              <p className="font-inter font-normal text-white ">
                We Serve many customers, ranging fro small business, medium,
                enterepuners, to world-renowed companies.
              </p>
            </div>
          </div>
        </section>

        {/* ///////////////////////////////////////////////////////////////// */}

        <section className="h-[80vh] w-full   hero flex flex-row justify-start items-start   ">
          <div className="container flex justify-between items-start flex-row px-10 mt-10">
            <div className="left w-7/12 pr-20  ">
              <h1 className="text-blue-600 font-inter font-semibold text-3xl">
                Contact Us
              </h1>
              <p className="text-black font-inter mt-4 text-lg">
                At WhizSeed, we're dedicated to fueling your entrepreneurial
                fire. Our services and expert guidance empower startups and
                entrepreneurs across India to build, grow, and prosper.
              </p>
            </div>
            <div className="right w-5/12   flex flex-col  justify-center items-center ">
              <img
                src="/images/contact.png"
                alt=""
                className="rounded-xl h-[450px] w-full"
              />
            </div>
          </div>
        </section>

        <section className=" flex justify-center items-center w-full h-[100%] py-10 ">
          <div className="containers flex flex-row justify-center items-start w-11/12 h-full py-10   mt-16 rounded-2xl  ">
            <div className="left flex flex-col w-1/2 justify-center items-start  px-4 sm:px-20  gap-16">
              <span className="flex flex-row">
                <p className="text-3xl font-inter font-semibold text-blue-600 ">
                  Get in Touch With us
                </p>
              </span>
              <p className="font-inter font-normal text-sm text-left  text-black ">
                WHIZSEED is a technology-driven platform which provides
                professional service in India. We strive to provide best service
                to our customers:
              </p>

              <div className="container w-full bg-blue-50 h-[100%] flex flex-row justify-start items-start rounded  ">
                <div className="left  ">
                  <div className="icon rounded-full flex text-center bg-blue-100 justify-center items-center h-20 w-20">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      className="text-blue-600 w-8 h-8 "
                    />
                  </div>
                </div>

                <div className="right">
                  <div className="container flex flex-col pl-4  ">
                    <p className="text-2xl text-black font-inter font-semibold">
                      Head Offices
                    </p>
                    <p className="text-lg text-black font-inter font-normal leading-6 ">
                      B-Block, Plot No 78, Sector 60, Noida, Uttar Pradesh
                      201136
                    </p>
                  </div>
                </div>
              </div>
              <div className="container w-full bg-blue-50  flex flex-row justify-start items-start rounded  ">
                <div className="left  ">
                  <div className="icon rounded-full flex text-center bg-blue-100 justify-center items-center h-20 w-20">
                    <FontAwesomeIcon
                      icon={faHeadphones}
                      className="text-blue-600 w-8 h-8 "
                    />
                  </div>
                </div>

                <div className="right">
                  <div className="container flex flex-col pl-4 gap-4 h-[100%] ">
                    <p className="text-2xl text-black font-inter font-semibold">
                      For Quick Inquiries
                    </p>
                    <div className="flex flex-row gap-4">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="text-blue-600 w-6 h-6 "
                      />
                      <p className="text-lg text-black font-inter font-normal leading-6 ">
                        +91-9786456547
                      </p>
                    </div>
                    <div className="flex flex-row gap-4">
                      {" "}
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-blue-600 w-6 h-6 "
                      />
                      <p className="text-lg text-black font-inter font-normal leading-6 ">
                        +91-9786456547
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container w-full bg-blue-50 h-[100%] flex flex-row justify-start items-start rounded  ">
                <div className="left  ">
                  <div className="icon rounded-full flex text-center bg-blue-100 justify-center items-center h-20 w-20">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      className="text-blue-600 w-8 h-8 "
                    />
                  </div>
                </div>

                <div className="right">
                  <div className="container flex flex-col pl-4 ">
                    <p className="text-2xl text-black font-inter font-semibold">
                      Email us
                    </p>
                    <p className="text-lg text-black font-inter font-medium leading-6 flex flex-row gap-4  ">
                      <span className="font-bold"> For Information</span>
                      info@whizseed.com
                    </p>
                    <p className="text-lg text-black font-inter font-medium leading-6 flex flex-row gap-4 ">
                      <span className="font-bold">For HR</span>
                      hr@whizseed.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="right w-1/2 flex  justify-center items-center p-2 ">
              <div className="box h-full w-full bg-white border border-black  rounded-3xl p-6 flex flex-col  gap-y-8 shadow-md shadow-gray-400 hover:shadow-[rgba(0,0,255,0.1)_0px_10px_1px_0px]   ">
                <p className="text-center text-2xl text-blue-600 font-inter font-semibold">
                  Get in Touch
                </p>

                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text text-bold text-xl font-semibold text-black ">
                      Select Your Service
                    </span>
                  </div>
                  <select className="select select-bordered bg-blue-50 ">
                    <option disabled selected>
                      Select Your Service
                    </option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </label>

                <div className="container flex flex-col gap-4  ">
                  <div className="innerContainer flex flex-row gap-6 ">
                    <label className="form-control w-full md:max-w-xs">
                      <div className="label">
                        <span className="label-text font-inter font-semibold text-xl text-black ">
                          *Full Name
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="What is your name"
                        className="input input-bordered w-full max-w-xs bg-blue-50 "
                      />
                    </label>
                    <label className="form-control w-full md:max-w-xs">
                      <div className="label">
                        <span className="label-text font-inter font-semibold text-xl text-black">
                          *Enter Address
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="yourname@gmail.com"
                        className="input bg-blue-50 input-bordered w-full max-w-xs"
                      />
                    </label>
                  </div>
                  <div className="innerContainer2 flex flex-row gap-6 ">
                    <label className="form-control w-full max-w-xs ">
                      <div className="label">
                        <span className="label-text font-inter font-semibold text-xl text-black">
                          *Mobile Number
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter Your Mobile Number"
                        className="input input-bordered w-full bg-blue-50 max-w-xs"
                      />
                    </label>
                    <label className="form-control w-full ">
                      <div className="label">
                        <span className="label-text text-bold text-xl font-semibold text-black ">
                          *Select State
                        </span>
                      </div>
                      <select className="select select-bordered bg-blue-50 ">
                        <option disabled selected>
                          Select Your State
                        </option>
                        <option>Gujarat</option>
                        <option>Rajasthan</option>
                      </select>
                    </label>
                  </div>
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text font-inter font-semibold text-xl text-black">
                        How can we help you?
                      </span>
                    </div>
                    <textarea
                      className="textarea bg-blue-50 textarea-bordered h-32"
                      placeholder="Type Your Query Here..."
                    ></textarea>
                  </label>
                  <button className="btn w-full h-16 text-lg font-medium rounded-full bg-blue-600 mt-6 text-white ">
                    Send Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full  h-[40vh] mt-14   ">
          <NewsLetter />
        </section>
      </div>
    </>
  );
};

export default Contact;
