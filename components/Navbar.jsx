import React from "react";
import logo from "/images/logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar=() =>{
  return (
    <div className="navbar bg-white h-24 shadow-xl fixed z-40    ">
      <div className="navbar-start  bg-white ">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-black font-bold  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-blue-600 rounded-box w-96 h-30 flex gap-2 "
          >
            <li className="  shadow-xl ">
              <NavLink to="/Start-Up">Start-Up</NavLink>
            </li>
            <li className="  shadow-xl ">
              <NavLink to="/Licence">Licence</NavLink>
            </li>
            <li className="  shadow-xl ">
              <NavLink to="/Tax">Tax</NavLink>
            </li>
            <li className="  shadow-xl ">
              <NavLink to="/Regulatory">Regulatory</NavLink>
            </li>
            <li className="  shadow-xl ">
              <NavLink to="/Environmental">Environmental</NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/"
          className="btn btn-ghost text-xl h-full w-full bg-transparent hover:bg-white  "
        >
          <img src={logo} alt="logo" className="h-[66.9px] w-[128px]" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex  ">
        <ul className="menu menu-horizontal px-1 text-black font-semibold text-xl gap-5 ">
          <li className=" flex flex-row">
            <details>
              <summary>Start-Up</summary>
              <ul className="bg-white rounded-t-none p-2">
                <li>
                  <NavLink to="/Start-Up">Start-Up</NavLink>
                </li>
                <li>
                  <a>Link </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Licence</summary>
              <ul className="bg-white rounded-t-none p-2">
                <li>
                  <NavLink to="/Licence">Licence</NavLink>{" "}
                </li>
                <li>
                  <a>Link </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Tax</summary>
              <ul className="bg-white rounded-t-none p-2">
                <li>
                  <NavLink to="/Tax">Tax</NavLink>
                </li>
                <li>
                  <a>Link </a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>Regulatory</summary>
              <ul className="bg-white rounded-t-none p-2">
                <li>
                  <NavLink to="/Regulatory">Regulatory</NavLink>{" "}
                </li>
                <li>
                  <a>Link </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Environmental</summary>
              <ul className="bg-white rounded-t-none p-2">
                <li>
                  <NavLink to="/Environmental">Environmental</NavLink>
                </li>
                <li>
                  <a>Link </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4  outline-none  ">
        <a className="btn group rounded-full hidden lg:inline-flex bg-green-600 text-white w-32 hover:bg-green-600  border-none ">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="h-5 w-5  transition ease-in-out delay-100  group-hover:translate-x-1 group-hover:scale-125  duration-300 "
          />
          <p className="transition ease-in-out delay-100  group-hover:translate-x-1   duration-300">
            Whatsapp
          </p>
        </a>
        <a className="btn group rounded-full hidden lg:inline-flex  bg-blue-600 text-white border-2 border-blue-600  w-32 p-0 hover:bg-transparent hover:border-blue-600  transition ease-in-out delay-50  ">
          <FontAwesomeIcon
            icon={faPhone}
            className="h-4 w-4  transition ease-in-out delay-50     duration-300 group-hover:text-blue-600"
          />
          <p className="text-sm  group-hover:text-blue-600">9895845869</p>
        </a>

        <a className="btn group rounded-full  bg-green-600  text-white inline-flex lg:hidden hover:bg-green-600  border-none ">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="h-5 w-5  transition ease-in-out delay-100  group-hover:translate-x-1 group-hover:scale-125  duration-300 "
          />
        </a>
        <a className="btn group rounded-full  inline-flex lg:hidden   bg-blue-600 text-white border-2 border-blue-600    hover:bg-transparent hover:border-blue-600  transition ease-in-out delay-50  ">
          <FontAwesomeIcon
            icon={faPhone}
            className="h-4 w-4  transition ease-in-out delay-50     duration-300 group-hover:text-blue-600"
          />
        </a>

        <a className="btn group hover:bg-transparent   bg-white   text-black border-none hidden lg:inline-flex  ">
          <FontAwesomeIcon icon={faBars} className="h-8 w-8  " />
        </a>
      </div>
    </div>
  );
}
export default Navbar