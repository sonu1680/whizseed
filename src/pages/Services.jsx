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
import Faq from "../../components/faq";
import Consult from "../../components/consult";

const Services = () => {
  return (
    <div className="flex bg-white h-[100%] w-full justify-center items-center flex-col p-0 min-w-[1000px] ">
      <section className="h-[80vh] w-full bg-white hero flex flex-row justify-between items-center  mt-20  ">
        <div className="h-[80vh] w-full  hero flex flex-row  justify-between items-center bg-opacity-85 bg-blue-50  p-8 px-24">
          <div className="left  ">
            <div>
              <p className="text-5xl font-semibold text-black ">
                Privated Limited Company
              </p>
              <p className="text-5xl font-semibold text-black py-3">
                Registration
              </p>

              <img
                src="/images/userslist.png"
                className="h-[60px] w-[350px] rounded-xl mt-8 "
                alt=""
              />
              <p className="text-black font-poppins font-semibold font-inter mt-2">
                Trusted by 6400+ studets, including designers from:
              </p>
            </div>
            <div className="container flex flex-row w-full h-28 bg-blue-600 justify-center items-center relative  top-32 md:top-28 right-24 rounded-tr-full  ">
              <div className="one  text-xl font-inter font-bold p-4 border-r-2 border-gray-500">
                <p className="text-yellow-300 text-2xl">10000+</p> Happy
                Customers
              </div>
              <div className="two text-xl font-inter font-bold p-4 border-r-2 border-gray-500">
                <p className="text-yellow-300 text-2xl">10+ </p> CA & Lawyers
              </div>
              <div className="three text-xl font-inter font-bold p-4 ">
                <p className="text-yellow-300 text-2xl">100+</p> Offices
              </div>
            </div>
          </div>

          {/* left side */}

          <div className="right ">
            <Consult />
          </div>
        </div>
      </section>
      {/* ///////////////////////////////////////////////////////////////// */}

      <section className="h-full w-full   hero flex flex-row justify-between items-start   ">
        <div className="container flex justify-between items-center flex-row p-10   ">
          <div className="left w-full  md:w-4/6  p-10 h-[100%]  ">
            <h1 className="text-blue-600 font-inter font-semibold text-3xl">
              Over View of Privated Limited Company Registration
            </h1>
            <p className="text-black font-inter ">
              Private Limited Company is one of the most popular type business
              structure that we have. It's the stylish way to start your
              business in India and it offers numerous benefits like separate
              legal actuality, better credibility, gives authenticity to the
              business, limited liability protection to authors or directors,
              and with this business structure you can fluently raise external
              finances. In India, a Private Limited Company Registration is
              managed & governed by MCA (Ministry of Corporate Affairs) and it's
              registered under the Companies Act, 2013.
            </p>

            <p className="text-black font-inter mt-8">
              In India, from new startups to well- established & largely
              profitable entrepreneurs choose this business structure as the
              stylish business reality. As your legal counsel, we offer
              cost-effective service for Private Limited Company Registration in
              India. Our professionals will handle all legal Company
              objectification attestation & procedure and ensure compliance with
              all the regulations laid out by the Ministry of Corporate Affairs
              (MCA). Once your Private Limited Company in India is incorporated
              as per the Companies Act, also you'll get a Certificate of
              Incorporation (CoI), and PAN & TAN as well. Once you get all
              these, you can fluently apply for a current bank account in your
              company's name and fluently start your business operations without
              any hassle.
            </p>

            <h1 className="text-blue-600 font-inter font-semibold text-3xl mt-10">
              Different Types of Bussiness Structures in India
            </h1>
            <p className="text-black font-inter mt-10 ">
              Beside Private Limited Company, there are other famous Business
              Structures in India similar as
            </p>

            <div className="right w-full flex   justify-center items-center mt-8 ">
              <div className="box h-[400px] w-full bg-transparent  rounded-3xl  flex flex-col  gap-y-4   ">
                <div className="title flex flex-row   h-full w-full justify-start ">
                  <img
                    src="/images/correct.png"
                    alt=""
                    className="h-4 w-4 mt-2"
                  />
                  <span className="text-black font-bold ml-2   ">
                    Limited Liability Partnership (LLP):
                    <span className="font-normal font-inter">
                      LLP has come one of the popular forms of business among
                      new startups or entrepreneurs in India. An LLP is much
                      better than the Partnership Firm & it can be fluently set
                      up by a minimum of 2 mates only who enter into an LLP
                      Agreement. still, the mates have limited liability & it
                      has perpetual race just like a Company in India.
                    </span>
                  </span>
                </div>

                <div className="title flex flex-row   h-full w-full justify-start ">
                  <img
                    src="/images/correct.png"
                    alt=""
                    className="h-4 w-4 mt-2"
                  />
                  <span className="text-black font-bold ml-2  ">
                    Limited Liability Partnership (LLP):
                    <span className="font-normal font-inter">
                      LLP has come one of the popular forms of business among
                      new startups or entrepreneurs in India. An LLP is much
                      better than the Partnership Firm & it can be fluently set
                      up by a minimum of 2 mates only who enter into an LLP
                      Agreement. still, the mates have limited liability & it
                      has perpetual race just like a Company in India.
                    </span>
                  </span>
                </div>

                <div className="title flex flex-row   h-full w-full justify-start  ">
                  <img
                    src="/images/correct.png"
                    alt=""
                    className="h-4 w-4 mt-2"
                  />
                  <span className="text-black font-bold ml-2">
                    Limited Liability Partnership (LLP):
                    <span className="font-normal font-inter">
                      LLP has come one of the popular forms of business among
                      new startups or entrepreneurs in India. An LLP is much
                      better than the Partnership Firm & it can be fluently set
                      up by a minimum of 2 mates only who enter into an LLP
                      Agreement. still, the mates have limited liability & it
                      has perpetual race just like a Company in India.
                    </span>
                  </span>
                </div>

                <div className="title flex flex-row  h-full w-full justify-start   ">
                  <img
                    src="/images/correct.png"
                    alt=""
                    className="h-4 w-4 mt-2"
                  />
                  <span className="text-black font-bold ml-2">
                    Limited Liability Partnership (LLP):
                    <span className="font-normal font-inter">
                      LLP has come one of the popular forms of business among
                      new startups or entrepreneurs in India. An LLP is much
                      better than the Partnership Firm & it can be fluently set
                      up by a minimum of 2 mates only who enter into an LLP
                      Agreement. still, the mates have limited liability & it
                      has perpetual race just like a Company in India.
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="right w-full h-full   flex-row  flex mt-20 items-center md:hidden  ">
              <div className="contactAgent">
                <img src="/images/contactAgent.png" alt="" />
              </div>
              <div className="border-2 border-blue-600 rounded-xl mt-10">
                <Consult />
              </div>
              <div className="otherService mt-10  pl-6 flex flex-col items-center justify-center  ">
                <p className="text-xl font-inter font-semibold text-blue-600 ">
                  OTHER SERVICES
                </p>
                <OtherServices />
              </div>
            </div>
            <Faq />
          </div>
          <div className="right w-2/6 h-[200vh] bg-white   flex-col hidden md:inline-flex justify-start items-center">
            <div className="contactAgent">
              <img src="/images/contactAgent.png" alt="" />
            </div>
            <div className="border-2 border-blue-600 rounded-xl mt-10">
              <Consult />
            </div>
            <div className="otherService mt-10  md:inline   ">
              <p className="text-xl font-inter font-semibold text-blue-600 ">
                OTHER SERVICES
              </p>
              <OtherServices />
            </div>
          </div>
        </div>
      </section>

      <section className="h-full ">
        <CompanyMarquee />
        <Review />
        <NewsLetter />
      </section>
    </div>
  );
};

export default Services;
