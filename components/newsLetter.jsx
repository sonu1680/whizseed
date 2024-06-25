import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
  faCircleArrowRight,
  faArrowAltCircleRight,
  faCircleArrowLeft,
  faUserCheck,
  faBuilding,
  faUsersRays,
} from "@fortawesome/free-solid-svg-icons";
const NewsLetter = () => {
  return (
    
      <section className=" flex justify-center w-full h-[100%] items-center  py-10 ">
        <div className="newsletter   w-11/12 h-[100%] flex flex-row  justify-between items-start px-6 gap-6 ">
          <div className="left w-1/2 flex justify-center items-center   ">
            <img
              src="/images/newsletter.png"
              alt=""
              className="h-[100px] w-[500px]"
            />
          </div>
          <div className="right w-1/2  flex justify-center items-center">
            <label className="input  flex items-center w-[550px] h-[60px] my-8 rounded-full bg-white border border-black">
              <input
                type="text"
                className=" bg-white grow flex flex-row pl-2 shadow-2xl "
                placeholder="Enter your email address"
              />
              <button className="bg-blue-800 w-[140px] btn h-[40px] rounded-full text-white font-inter mr-[-6px] ">
                subscribe <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </label>
          </div>
        </div>
      </section>
    
  );
}

export default NewsLetter
