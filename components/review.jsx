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
const Review = () => {
    

   const reviewData = [
     {
       title: "Sonu Pandit",
     },

     {
       title: "Sonu Pandit",
     },
     {
       title: "Sonu Pandit",
     },
     {
       title: "Sonu Pandit",
     },
     {
       title: "Sonu Pandit",
     },
     {
       title: "Sonu Pandit",
     },
   ];

  return (
    
      <section className=" flex justify-center w-full h-[130vh] items-center  flex-col ">
        <div className="review mt-48 ">
          <div className="heading text-black font-inter font-bold text-5xl text-center ">
            Here's what our amazing <br />{" "}
            <span className="text-blue-600">clients</span> are saying
          </div>
        </div>

        <div className="container h-[120vh] w-11/12  mt-10 rounded-3xl p-6  flex flex-row  flex-wrap gap-8 px-20">
          {reviewData.map((item) => (
            <div className="reviewbox w-96 h-96 bg-gray-100 rounded-2xl p-2 ">
              <div className="heading w-full h-20 flex flex-row justify-between p-2  ">
                <div className="flex flex-col justify-center items-center mt-10 ">
                  <p className="text-lg font-semibold text-black">
                    Sonu Pandit
                  </p>
                  <img
                    src="images/rating.png"
                    alt=""
                    className="w-32 h-32 mt-[-50px]"
                  />
                </div>
                <div className="mt-3">
                  <img src="/images/google.png" alt="" className="w-8 h-8" />
                </div>
              </div>
              <p className="px-4 text-black font-inter text-md ">
                Recently, I partnered with a friend to launch our business, and
                we needed help registering it as a Partnership Firm. Whizseed
                made the entire process incredibly smooth. They were
                professional, efficient, and made a potentially complex process
                very manageable.
              </p>
            </div>
          ))}
        </div>
        <div className="button flex gap-6  ">
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="h-8 w-8  hover:text-blue-600 "
          />

          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="h-8 w-8  hover:bg-blue-600 "
          />
        </div>
      </section>

  );
}

export default Review
