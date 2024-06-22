import React from 'react'
import Marquee from "react-fast-marquee";

const CompanyMarquee = () => {
  return (
    <section className="h-40 w-full px-14  flex justify-center items-center rounded">
      <Marquee speed={400} className="">
        <img
          className="h-32 w-full rounded-3xl "
          src="/images/companyLogos.png"
          alt=""
        />
      </Marquee>
    </section>
  );
}

export default CompanyMarquee
