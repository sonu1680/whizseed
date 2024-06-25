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
    </>
  );
};

export default Home;
