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
  faPhoneVolume
} from "@fortawesome/free-solid-svg-icons";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import NewsLetter from "../../components/newsLetter";
import Review from "../../components/review";
import CompanyMarquee from "../../components/companyMarque";
import OtherServices from "../../components/otherServices";
import Faq from "../../components/faq";
import Consult from "../../components/consult";

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

const About = () => {
  return (
    <>
      <div className="flex bg-white h-[100%] w-full justify-center items-center flex-col min-w-[1000px] ">
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

        <section className="h-[100%] w-full bg-white  hero flex flex-row justify-start items-start py-10   ">
          <div className="container flex justify-between items-center flex-row px-10 mt-10">
            <div className="left w-full md:w-7/12  md:pr-20 ">
              <h1 className="text-blue-600 font-inter font-semibold text-3xl">
                Abouts Us
              </h1>
              <p className="text-black font-inter mt-4 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia neque nulla consequatur itaque a? Animi, quas tempore
                dignissimos hic corporis laborum unde id at assumenda commodi
                quibusdam a voluptas soluta iusto facere illum ipsa culpa ipsum
                repellat nam possimus quia recusandae. Quod officia cum aperiam
                quidem mollitia quae aut, nisi, quisquam distinctio, quo
                delectus. Corrupti architecto harum dicta voluptatibus vero
                aliquid consequuntur enim! Vitae et nostrum voluptates
                asperiores in unde quas odio non eaque, nulla blanditiis
                veritatis adipisci dolorum iusto quibusdam, odit inventore.
                Minima officiis aspernatur deserunt quidem atque, quis
                distinctio quae et neque debitis necessitatibus molestias
                veritatis, culpa corrupti. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Ad reiciendis quia, qui adipisci
                iure enim dolorem nihil molestiae doloribus quod vel maxime
                eaque eius autem illum incidunt tenetur officia modi?
              </p>

              <p className="text-black font-inter mt-4 text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia neque nulla consequatur itaque a? Animi, quas tempore
                dignissimos hic corporis laborum unde id at assumenda commodi
                quibusdam a voluptas soluta iusto facere illum ipsa culpa ipsum
                repellat nam possimus quia recusandae. Quod officia cum aperiam
                quidem mollitia quae aut, nisi, quisquam distinctio, quo
                delectus. Corrupti architecto harum dicta voluptatibus vero
                aliquid consequuntur enim! Vitae et nostrum voluptates
                asperiores in unde quas odio non eaque, nulla blanditiis
                veritatis adipisci dolorum iusto quibusdam, odit inventore.
                Minima officiis aspernatur deserunt quidem atque, quis
                distinctio quae et neque debitis necessitatibus molestias
                veritatis, culpa corrupti. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Ad reiciendis quia, qui adipisci
                iure enim dolorem nihil molestiae doloribus quod vel maxime
                eaque eius autem illum incidunt tenetur officia modi?
              </p>
            </div>
            <div className="right bg-green-800  w-5/12 aspect-video flex-col hidden md:inline-flex justify-center items-center ">
              <img
                src="/images/about.png"
                alt=""
                className="rounded-xl h-[500px] w-full"
              />
            </div>
          </div>
        </section>

        <div className="   md:hidden my-10 w-3/4 ">
          <img
            src="/images/about.png"
            alt=""
            className="rounded-xl h-[500px] w-full"
          />
        </div>

        <section className="h-[100%] w-full  hero flex flex-col justify-start items-center p-0   ">
          <p className="text-4xl text-black font-inter font-bold text-center">
            {" "}
            50,000+ People Choose{" "}
            <span className="text-blue-600">WHIZSEED</span> for their Legal{" "}
            <br />
            Solutions.
          </p>
          <div className="cotainer w-11/12 bg-blue-700 h-full py-2 rounded-3xl flex flex-wrap justify-evenly items-center mt-10  px-10">
            {data.map((item, index) => (
              <div
                className="one bg-white   w-96 md:w-[27%] h-48  rounded-xl mt-4 "
                key={index}
              >
                <div className="title flex flex-row justify-start items-center p-6 w-80">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-blue-600 w-8 h-8 "
                  />
                  <p className="pl-4 text-black font-inter font-semibold text-lg ">
                    {item.title}
                  </p>
                </div>
                <p className="pl-6  text-black font-inter font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="container w-11/12  py-10  ">
            <div className="box flex flex-row px-16 md:px-0  md:w-[53%] w-full h-[100%]   md:justify-start md:items-start ">
              <Faq />
            </div>
          </div>
        </section>

        <section className="h-full  ">
          <CompanyMarquee />
          <Review />
          <NewsLetter />
        </section>

      </div>
    </>
  );
};

export default About;
