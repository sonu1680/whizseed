import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  const data = [
    {
      title: "sonu",
    },
    {
      title: "sonu",
    },
    {
      title: "sonu",
    },
    {
      title: "sonu",
    },
  ];
  return (
    <div className="container  w-full mt-16 gap-5 flex flex-col">
      <p className="text-bold text-black font-bold text-3xl" >Frequently Asked Questions</p>

      {data.map((item) => (
        <div className="box w-full bg-blue-50 flex flex-row justify-between items-center p-4 rounded-sm  font-semibold font-inter text-black  ">
          What do i do
          <FontAwesomeIcon
            icon={faPlus}
            className="text-black font-bold h-6 w-6 "
          />
        </div>
      ))}
    </div>
  );
};

export default Faq;
