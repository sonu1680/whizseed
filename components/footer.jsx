import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagramSquare,
  faLinkedin,
  faMagento,
  faSquareFacebook,
  faSquareXTwitter,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer className="footer items-center  bg-blue-800 text-neutral-content flex flex-col pb-8 min-w-[1000px]  ">
        <div className="top w-full  flex justify-between items-center h-full bg-blue-900  flex-wrap px-20 ">
          <aside className="items-center grid-flow-col flex justify-center ">
            <div className="flex flex-row gap-6 sm:gap-12 font-bold text-white  justify-center items-center ">
              <div>
                About us <span className="ml-2">|</span>{" "}
              </div>
              <div>
                Term of Service <span className="ml-2">|</span>{" "}
              </div>
              <div>
                Privacy Policy <span className="ml-2">|</span>{" "}
              </div>
              <div>Refund Policy </div>
            </div>
          </aside>
          <nav className="grid-flow-col flex gap-6 md:place-self-center md:justify-self-end  flex-wrap justify-center items-center  ">
            <a>
              <FontAwesomeIcon
                icon={faSquareFacebook}
                className="h-6 w-6 text-white "
              />
            </a>
            <a>
              <FontAwesomeIcon
                icon={faSquareXTwitter}
                className="h-6 w-6 text-white"
              />
            </a>
            <a>
              <FontAwesomeIcon
                icon={faYoutube}
                className="h-6 w-6 text-white"
              />
            </a>
            <a>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-6 w-6 text-white"
              />
            </a>
            <a>
              <FontAwesomeIcon
                icon={faInstagramSquare}
                className="h-6 w-6 text-white"
              />
            </a>
          </nav>
        </div>

        <div className="bottom text-white   w-full footer text-sm    flex flex-row justify-center items-center lg:grid lg:grid-rows-1 lg:gap-10 sm:justify-between  bg-blue-800  sm:px-20 gap-10 flex-wrap     ">
          <nav className  >
            <h6 className="footer-title text-yellow-400">START A BUSINESS</h6>
            <a className="link link-hover  ">Private Limited Company</a>
            <a className="link link-hover">Limited Liability Partnership</a>
            <a className="link link-hover">One Person Company</a>
            <a className="link link-hover">Advertisement</a>
            <a className="link link-hover">Partnership Firm</a>
            <a className="link link-hover">Proprietorship Firm</a>
          </nav>
          <nav>
            <h6 className="footer-title  text-yellow-400">
              TRADEMARK & COPYRIGHT
            </h6>
            <a className="link link-hover">Trademark Registration</a>
            <a className="link link-hover">Trademark Objection</a>
            <a className="link link-hover">Trademark Assignment </a>
            <a className="link link-hover">Trademark Renewal</a>
            <a className="link link-hover">Copyright Registration</a>
          </nav>
          <nav>
            <h6 className="footer-title  text-yellow-400">
              G0VT & TAX REGISTRATION
            </h6>
            <a className="link link-hover">GST Registration</a>
            <a className="link link-hover">TDS Return</a>
            <a className="link link-hover">Importer Exporter Code</a>
            <a className="link link-hover">Professional Tax Registration</a>
            <a className="link link-hover">
              Shops & Establishments Registration
            </a>
          </nav>
          <nav>
            <h6 className="footer-title  text-yellow-400">
              LEGAL DOCUMENTAION
            </h6>
            <a className="link link-hover">Non-Disclosure Agreement</a>
            <a className="link link-hover">Founders Agreement</a>
            <a className="link link-hover">Term Sheet</a>
            <a className="link link-hover">Shareholders Agreement</a>
            <a className="link link-hover">Share Purchase Agreement</a>
          </nav>
        </div>

        <div className="text w-full px-20 flex gap-5 flex-col  ">
          <div>
            <p className="text-white font-semibold font-inter ">
              Starting a Business:
            </p>
            <p className="text-sm">
              Starting a business is exciting undertaking filled with
              possibilities. It is a chance to live your passion makes it into a
              profitable venture giving a meaningful impact. With the right
              mindset, perseverance, and a well-executed plan, you can create a
              thriving business that will fulfil your dreams and also meets the
              needs of your customers. Therefore, Embrace innovation, embrace
              your vision, and embrace the opportunities with the experts at
              whizseed.
            </p>
          </div>

          <div>
            <p className="text-white font-semibold font-inter ">
              Intellectual Property Rights :
            </p>
            <p className="text-sm">
              Intellectual Property rights have an important role in protecting
              innovation, creativity, promoting competition, and maintaining
              economic prosperity. It is important to understand that the
              requirements for IPR that can vary depending upon the jurisdiction
              and the specific laws governing intellectual property. It is
              advisable to consult with whizseed legal experts or professionals
              to understand the specific requirements and procedures applicable
              to your situation.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold font-inter ">
              Legal Documentation :
            </p>
            <p className="text-sm">
              It is compulsory to have proper legal documentation especially
              when starting and operating a business. Legal documentation helps
              establish the legal framework, rights, and responsibilities of the
              business and its stakeholders. At whizseed legal professionals or
              business advisors ensure that you have the necessary legal
              documentation tailored to your specific business needs and local
              laws. This may include licenses, permits, certificates, safety
              manuals, environmental impact assessments, or industry-specific
              compliance documents.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold font-inter ">
              Mandatory Compliance :
            </p>
            <p className="text-sm">
              Mandatory compliance refers to the legal obligations and
              requirements that businesses must fulfil in order to operate
              within the boundaries set by regulations, laws, and governing
              bodies. These compliance obligations must be maintained to ensure
              the safety, fairness, and integrity of business practices and to
              protect the interests of various stakeholders. Hence, whizseed
              keeps you informed about the applicable laws and regulations and
              also guide you take the necessary steps to meet the compliance
              obligations.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold font-inter ">
              Need for Lawyers :
            </p>
            <p className="text-sm">
              Businesses must comply with various laws and regulations at the
              local, state, and national levels. Lawyers help businesses
              understand and navigate the legal requirements specific to their
              industry and jurisdiction. When starting a business, lawyers
              provide guidance on the most suitable legal structure. They ensure
              that businesses operate within the boundaries of the law, reducing
              the risk of legal issues, penalties, and fines. whizseed lawyers'
              team can provide valuable legal expertise, help mitigate risks,
              and ensure that your business operates within the bounds of the
              law.
            </p>
          </div>
        </div>

        <div className="copyright pt-24">
          <footer className="footer footer-center w-full text-primary-content">
            <nav>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <img
                    src="/images/payments.png"
                    alt=" "
                    className="w-[350px]"
                  />
                </a>
              </div>
            </nav>
            <aside className="mt-[-20px]">
              <p className=" text-white font-normal">
                By continuing this page, you agree to our{" "}
                <span className="text-yellow-400">
                  Terms & Conditions. Privacy Policy and Return Policy.
                </span>
              </p>
              <p className="text-white">
                All Rights Reserverd © Whizseed, 2024
              </p>
            </aside>
          </footer>
        </div>
      </footer>
    </>
  );
};

export default Footer;
