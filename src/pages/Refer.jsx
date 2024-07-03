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
  fa1,
  fa2,
  fa3,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import NewsLetter from "../../components/newsLetter";

const Refer = () => {
  return (
    <div className="flex bg-white h-[100%] w-full justify-center items-center flex-col min-w-[1000px] ">
      <section
        className="h-[50vh] w-full bg-blue-500  hero flex flex-row justify-between items-center  mt-20  "
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5313173/pexels-photo-5313173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="h-[50vh] w-full  hero flex flex-col  justify-center items-center bg-opacity-85 bg-blue-900  p-8 px-24">
          <div className="texts flex flex-row justify-center  gap-4 items-center w-full text-center text-4xl text-white font-inter font-semibold ">
            <img src="/images/money.png" alt="" className="h-10 w-10" />
            Refer a Friend & Get Rewarded
            <img src="/images/money.png" alt="" className="h-10 w-10" />
          </div>
        </div>
      </section>

      <section className=" flex justify-center items-center w-full ">
        <div className="containers flex flex-row justify-center items-start lg:w-3/4 w-[95%] h-[100%]  p-6 bg-white border-2 border-black mt-16 rounded-2xl  relative bottom-48">
          <div className="left flex flex-col w-1/2 justify-center items-start px-10   gap-10">
            <div className="box flex gap-2 flex-col ">
              <p className="text-xl font-inter font-semibold text-black ">
                Join Our Exciting Referal Program Today!
              </p>

              <p className="font-inter font-normal text-sm text-left  text-black ">
                WHIZSEED is a technology-driven platform which provides
                professional service in India. We strive to provide best service
                to our customers:
              </p>
              <p className="text-xl font-inter font-semibold text-black ">
                Three Easy Steps
              </p>
            </div>

            <div className="container w-full bg-blue-50 h-full flex flex-row justify-start items-start rounded  ">
              <div className="left  ">
                <div className="icon rounded-full flex text-center bg-blue-100 justify-center items-center h-20 w-20">
                  <FontAwesomeIcon
                    icon={fa1}
                    className="text-blue-600 w-8 h-8 "
                  />
                </div>
              </div>

              <div className="right">
                <div className="container flex flex-col pl-4 flex-1 ">
                  <p className="text-2xl text-blue-600 font-inter font-semibold">
                    Share Link
                  </p>
                  <p className="text-md text-black font-inter font-normal leading-6 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nisi, placeat.
                  </p>
                </div>
              </div>
            </div>
            <div className="container w-full bg-blue-50 h-full flex flex-row justify-start items-start rounded  ">
              <div className="left  ">
                <div className="icon rounded-full flex text-center bg-blue-100 justify-center items-center h-20 w-20">
                  <FontAwesomeIcon
                    icon={fa2}
                    className="text-blue-600 w-8 h-8 "
                  />
                </div>
              </div>

              <div className="right">
                <div className="container flex flex-col pl-4 ">
                  <p className="text-2xl text-blue-600 font-inter font-semibold">
                    Refer a Friend
                  </p>
                  <p className="text-md text-black font-inter font-normal leading-6 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nisi, placeat.
                  </p>
                </div>
              </div>
            </div>
            <div className="container w-full bg-blue-50 h-full flex flex-row justify-start items-start rounded  ">
              <div className="left  ">
                <div className="icon rounded-full flex text-center bg-blue-100 justify-center items-center h-20 w-20">
                  <FontAwesomeIcon
                    icon={fa3}
                    className="text-blue-600 w-8 h-8 "
                  />
                </div>
              </div>

              <div className="right">
                <div className="container flex flex-col pl-4 ">
                  <p className="text-2xl text-blue-600 font-inter font-semibold">
                    Earn Rewards
                  </p>
                  <p className="text-lg text-black font-inter font-normal leading-6 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nisi, placeat.
                  </p>
                </div>
              </div>
            </div>
            <div className="referImg flex justify-center items-center w-full ">
              <img src="/images/refer.png" alt="refer" className="w-80 h-56" />
            </div>
          </div>

          <div className="right w-[45%] flex  justify-center items-center p-2 ">
            <div className="box h-[100%] w-full bg-white border   rounded-3xl p-6 flex flex-col  gap-y-8 shadow-md shadow-gray-400    ">
              <p className="text-center text-lg text-black font-inter font-semibold">
                Enter Your Basic details to generate your unique referal link
              </p>

              <div className="container flex flex-col gap-4  ">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text text-black text-lg font-inter font-medium ">
                      Full Name
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full bg-blue-50 text-black"
                  />
                </label>
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text text-black text-lg font-inter font-medium ">
                      Mobile Number
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your Mobile Number"
                    className="input input-bordered w-full bg-blue-50 text-black"
                  />
                </label>
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text text-black text-lg font-inter font-medium ">
                      Email Id
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your Email id"
                    className="input input-bordered w-full bg-blue-50 text-black"
                  />
                </label>

                <button className="btn w-full h-16 text-lg font-medium rounded-full bg-blue-600 mt-6 text-white ">
                  Submit
                </button>
                <div className="container flex justify-center items-center flex-col gap-y-2 ">
                  <p className="text-black font-inter font-semibold text-lg">
                    How it Works
                  </p>
                  <p className="text-black">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, corporis.
                  </p>
                  <p className="text-black ">
                    Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet done.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full  h-[25vh] flex justify-start items-end  ">
        {/* <NewsLetter /> */}
      </section>
    </div>
  );
};

export default Refer;
