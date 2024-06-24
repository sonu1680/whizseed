import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const Review = () => {
  const reviewData = [
    { title: "Sonu Pandit" },
    { title: "Sonu Pandit" },
    { title: "Sonu Pandit" },
    { title: "Sonu Pandit" },
    { title: "Sonu Pandit" },
    { title: "Sonu Pandit" },
  ];

  return (
    <section className="flex justify-center w-full min-h-screen items-center flex-col bg-red-200 py-20">
      <div className="review mt-20 md:mt-24">
        <div className="heading text-black font-inter font-bold text-2xl md:text-5xl text-center">
          Here's what our amazing <br />
          <span className="text-blue-600">clients</span> are saying
        </div>
      </div>

      <div className="container w-11/12 mt-10 rounded-3xl p-6 bg-green-300 flex flex-col md:flex-row justify-center items-center flex-wrap gap-8 px-4 md:px-20">
        {reviewData.map((item, index) => (
          <div
            className="reviewbox min-w-36 w-full md:w-96 h-96 bg-gray-100 rounded-2xl p-2"
            key={index}
          >
            <div className="heading w-full h-20 flex flex-row justify-between p-2">
              <div className="flex flex-col justify-center items-center mt-10">
                <p className="text-lg font-semibold text-black">Sonu Pandit</p>
                <img
                  src="images/rating.png"
                  alt=""
                  className="w-16 h-16 md:w-32 md:h-32 mt-[-25px] md:mt-[-50px]"
                />
              </div>
              <div className="mt-3">
                <img src="/images/google.png" alt="" className="w-8 h-8" />
              </div>
            </div>
            <p className="px-4 text-black font-inter text-md">
              Recently, I partnered with a friend to launch our business, and we
              needed help registering it as a Partnership Firm. Whizseed made
              the entire process incredibly smooth. They were professional,
              efficient, and made a potentially complex process very manageable.
            </p>
          </div>
        ))}
      </div>
      <div className="button flex gap-6 mt-8">
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className="h-8 w-8 cursor-pointer hover:text-blue-600"
        />
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          className="h-8 w-8 cursor-pointer hover:text-blue-600"
        />
      </div>
    </section>
  );
};

export default Review;
