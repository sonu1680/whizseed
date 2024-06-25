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

const Partner = () => {
  return (
    <div className="flex bg-white h-[100%] w-full justify-center items-center flex-col  min-w-[1000px]  ">
      <section
        className="h-[50vh] w-full bg-blue-500  hero flex flex-row justify-between items-center  mt-20  "
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5313173/pexels-photo-5313173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="h-[50vh] w-full  hero flex flex-col  justify-center items-center bg-opacity-85 bg-blue-900  p-8 px-24">
          <div className="texts flex flex-row justify-center  gap-4 items-center w-full text-center text-5xl text-white font-inter font-semibold ">
            <img src="/images/handshake.png" alt="" className="h-20 w-20  " />
            Become a Partner
            <img src="/images/handshake.png" alt="" className="h-20 w-20" />
          </div>
        </div>
      </section>

      <section className=" flex justify-center items-center w-full ">
        <div className="containers flex flex-row justify-center items-start w-[90%] h-[100vh] p-6 bg-white border-2 border-black mt-16 rounded-2xl  relative bottom-48">
          <div className="left flex flex-col w-1/2 h-full justify-center items-center ">
            <div className="box flex  flex-col justify-center items-center ">
              <p className="text-xl font-inter font-semibold text-blue-600 ">
                Lets Partner Up!
              </p>

              <p className="font-inter font-semibold text-xl  text-left  text-black ">
                come our partner and drive your
              </p>
              <p className="text-xl font-inter font-semibold text-black ">
                bussiness to the next level
              </p>
              <div className="referImg flex justify-center items-center w-full ">
                <img
                  src="/images/partner.png"
                  alt="refer"
                  className="w-[450px] h-[400px]"
                />
              </div>
            </div>
          </div>

          <div className="right w-[45%] flex  justify-center items-center pb-6 ">
            <div className="box h-[100%] w-full bg-white border   rounded-3xl p-6 flex flex-col  gap-y-8 shadow-md shadow-gray-400    ">
              <div className="container flex flex-col   ">
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
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text text-bold text-xl font-semibold text-black ">
                      Occupation
                    </span>
                  </div>
                  <select className="select select-bordered bg-blue-50 ">
                    <option disabled selected>
                      Select Your occupation
                    </option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                  </select>
                </label>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text font-inter font-semibold text-xl text-black">
                      Message
                    </span>
                  </div>
                  <textarea
                    className="textarea bg-blue-50 textarea-bordered h-20"
                    placeholder="Write message..."
                  ></textarea>
                </label>
                <button className="btn w-full h-16 text-lg font-medium rounded-full bg-blue-600 mt-6 text-white ">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full  h-[25vh] flex justify-start items-end  ">
        <NewsLetter />
      </section>
    </div>
  );
};

export default Partner;
