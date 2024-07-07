import React from 'react'
import Marquee from "react-fast-marquee";

const CompanyMarquee = () => {
  return (
    <section className="h-56 w-full px-14  flex justify-start items-center rounded  flex-col ">
      <div className="title flex flex-row ">
        <p className="text-2xl sm:text-5xl font-inter text-black font-semibold pl-20  ">
          We love our {"  "}
        </p>

        <p className="text-2xl sm:text-5xl font-inter text-blue-600 font-semibold ml-2 ">
          clients
        </p>
      </div>
      <Marquee speed={400} className="mt-4">
        <img
          className="h-28 w-full rounded-3xl "
          src="/images/companyLogos.png"
          alt=""
        />
      </Marquee>
    </section>
  );
}

export default CompanyMarquee
