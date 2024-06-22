import React from 'react'

const Consult = () => {
  return (
    <>
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
            
    </>
  )
}

export default Consult
