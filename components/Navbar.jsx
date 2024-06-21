import React from "react";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import whatsapp from "../assets/whatsapp.png";
import { NavLink } from "react-router-dom";

const Navbar=() =>{
  return (
    <div className="navbar bg-white shadow-xl fixed ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink>Start-Up</NavLink>
            </li>
            <li>
              <NavLink>Licence</NavLink>
            </li>
            <li>
              <NavLink>Tax</NavLink>
            </li>
            <li>
              <NavLink>Regulatory</NavLink>
            </li>
            <li>
              <NavLink>Environmental</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="logo" className="h-12 w-24" />{" "}
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-black font-semibold text-xl gap-5 ">
          <li>
            <NavLink to="/Start-Up">Start-Up</NavLink>
          </li>
          <li>
            <NavLink to="/Licence">Licence</NavLink>
          </li>
          <li>
            <NavLink to="/Tax">Tax</NavLink>
          </li>
          <li>
            <NavLink to="/Regulatory">Regulatory</NavLink>
          </li>
          <li>
            <NavLink to="/Environmental">Environmental</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4  ">
        <a className="btn rounded-full bg-green-600 text-white  ">
          {" "}
          <img src={whatsapp} alt="" className="w-6 h-6 " />
          Whatsapp
        </a>
        <a className="btn rounded-full bg-blue-600 text-white ">
          {" "}
          <img src={phone} alt="" className="w-6 h-6 " />
          9895845869
        </a>
      </div>
    </div>
  );
}
export default Navbar