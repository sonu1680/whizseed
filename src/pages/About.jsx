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

const About = () => {
  return (
    <>
      <div className="flex bg-white h-[100%] w-full justify-center items-center flex-col ">
        <section
          className="h-[80vh] w-full bg-blue-500  hero flex flex-row justify-between items-center  mt-20  "
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/5313173/pexels-photo-5313173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className="h-[80vh] w-full  hero flex flex-row  justify-between items-center bg-opacity-85 bg-blue-900  p-8 px-24">
            <div className="left  ">
              <div>
                <p className="text-5xl font-semibold text-white ">
                  Privated Limited Company
                </p>
                <p className="text-5xl font-semibold text-white py-3">
                  Registration
                </p>

                <img
                  src="/images/userslist.png"
                  className="h-[40px] w-[220px] rounded-xl mt-8 "
                  alt=""
                />
                <p className="text-white font-poppins font-medium font-inter mt-2">
                  Trusted by 6400+ studets, including designers
                </p>
              </div>
              <div className="container flex flex-row w-full h-28 bg-blue-600 justify-center items-center relative top-28 right-24 rounded-tr-full">
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
              <div className="inputContainer bg-white p-6 rounded-xl flex gap-4 flex-col h-[450px] w-96 justify-center items-center">
                <p className="text-blue-700  font-inter font-semibold text-center text-xl">
                  Consultation By Expert
                </p>
                <label className="input input-bordered flex items-center gap-2 bg-blue-50 border border-gray-400 w-full ">
                  <input type="text" className="grow" placeholder="Your Name" />
                </label>

                <label className="input input-bordered flex items-center gap-2 bg-blue-50 border border-gray-400 w-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow  "
                    placeholder="Email Address"
                  />
                </label>

                <label className="input input-bordered flex items-center gap-2 bg-blue-50 border border-gray-400 w-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Mobile Number"
                  />
                </label>

                <select className="select select-bordered w-full  bg-blue-50 border border-gray-400  ">
                  <option disabled selected>
                    Select State
                  </option>
                  <option>Gujarat</option>
                  <option>Rajasthan</option>
                </select>
                <button className="w-full h-[50px] bg-blue-700 rounded-full font-inter font-semibold text-white">
                  {" "}
                  Get Started Now
                </button>
                <p className="text-normal font-inter text-sm text-center">
                  We'll never share your details with third parties. we don't
                  spam you.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////////////// */}

        <section className="h-[250vh] w-full   hero flex flex-row justify-between items-center   ">
          <div className="container flex justify-between items-center flex-row p-10 mt-20">
            <div className="left w-4/6  p-10">
              <h1 className="text-blue-600 font-inter font-semibold text-3xl">
                Over View of Privated Limited Company Registration
              </h1>
              <p className="text-black font-inter ">
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
                veritatis, culpa corrupti.
              </p>

              <p className="text-black font-inter mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                optio fugiat excepturi eaque blanditiis aut veritatis ratione!
                Ducimus minus dignissimos quo adipisci dolorem voluptatibus rem
                soluta error omnis dolorum mollitia assumenda nihil ullam ab ad,
                nam odio quia iusto ipsam. Ducimus porro dolor optio sint
                voluptatem adipisci modi distinctio. Saepe illo doloribus quo
                eligendi qui nemo soluta quod ratione eius architecto, libero
                commodi nisi beatae assumenda necessitatibus blanditiis quis
                recusandae, dicta modi? Error tempora consequatur fugiat magni
                quos, autem enim vel nulla quae sint aut suscipit earum alias
                quisquam laborum harum eum reprehenderit. Molestiae, aperiam
                odit dolorem ea necessitatibus natus.
              </p>

              <h1 className="text-blue-600 font-inter font-semibold text-3xl mt-10">
                Different Types of Bussiness Structures in India
              </h1>
              <p className="text-black font-inter ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
                modi dignissimos fuga dolorem sint saepe, est quas reiciendis
                sapiente. Dolore.
              </p>

              <div className="right w-full flex   justify-center items-center mt-8 ">
                <div className="box h-[400px] w-full bg-transparent  rounded-3xl  flex flex-col  gap-y-20   ">
                  <div className="title flex flex-row  h-8 w-full justify-start ">
                    <img
                      src="/images/correct.png"
                      alt=""
                      className="h-4 w-4 mt-2"
                    />
                    <span className="text-black font-bold ml-2   ">
                      Expert Guidance:{" "}
                      <span className="font-normal font-inter">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus, repudiandae aliquid nisi quas in minima,
                        rem, alias perspiciatis beatae aperiam recusandae
                        reiciendis aspernatur accusamus nihil atque! Hic
                        temporibus id commodi fugiat perferendis necessitatibus
                        magnam blanditiis ducimus repudiandae ut pariatur quo
                        odio possimus, tenetur accusantium magni error harum
                        doloribus deleniti dignissimos!
                      </span>
                    </span>
                  </div>

                  <div className="title flex flex-row  h-8 w-full justify-start ">
                    <img
                      src="/images/correct.png"
                      alt=""
                      className="h-4 w-4 mt-2"
                    />
                    <span className="text-black font-bold ml-2  ">
                      Comprehensive Services:{" "}
                      <span className="font-normal font-inter">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Suscipit numquam iusto illo temporibus quis possimus
                        odio ipsam vel recusandae. Possimus ex odio suscipit
                        accusamus beatae. Magnam repellat dolor mollitia
                        architecto sed delectus distinctio placeat ex sequi
                        aspernatur necessitatibus porro dolorum optio, doloribus
                        saepe tenetur cum hic natus rem id. Ullam.
                      </span>
                    </span>
                  </div>

                  <div className="title flex flex-row  h-8 w-full justify-start  ">
                    <img
                      src="/images/correct.png"
                      alt=""
                      className="h-4 w-4 mt-2"
                    />
                    <span className="text-black font-bold ml-2">
                      Customized Solutions:{" "}
                      <span className="font-normal font-inter">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quam expedita nesciunt adipisci! Facere cum quis
                        velit quos odio, vitae ea molestias ipsum ducimus vel
                        quas officiis dolore distinctio, quisquam incidunt
                        tenetur provident eos? Deserunt neque velit qui alias
                        provident molestias necessitatibus, ullam, totam sunt
                        accusantium, ut recusandae eius ex repellat!
                      </span>
                    </span>
                  </div>

                  <div className="title flex flex-row  h-8 w-full justify-start  ">
                    <img
                      src="/images/correct.png"
                      alt=""
                      className="h-4 w-4 mt-2"
                    />
                    <span className="text-black font-bold ml-2">
                      Regulatory Compliance:{" "}
                      <span className="font-normal font-inter">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repudiandae incidunt repellat reiciendis, sequi
                        enim autem amet doloribus ullam magni, est earum. Porro
                        velit eos doloremque voluptas architecto voluptatem
                        fugiat aut vel hic libero qui in beatae, quisquam quam
                        vitae quod, voluptatibus numquam voluptates sequi,
                        impedit maiores ad dolor eaque? Quo.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <Faq />
            </div>
            <div className="right w-2/6 h-[200vh] bg-white  flex flex-col  justify-start items-center">
              <div className="contactAgent">
                <img src="/images/contactAgent.png" alt="" />
              </div>
              <div className="border-2 border-blue-600 rounded-xl mt-10">
                <Consult />
              </div>
              <div className="otherService mt-10">
                <p className="text-xl font-inter font-semibold text-blue-600 ">
                  OTHER SERVICES
                </p>
                <OtherServices />
              </div>
            </div>
          </div>
        </section>

        <section className="h-[195vh]  ">
          <CompanyMarquee />
          <Review />
          <NewsLetter />
        </section>
      </div>
    </>
  );
};

export default About;
