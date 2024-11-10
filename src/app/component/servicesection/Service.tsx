'use client'

import React from 'react'

const Service = () => {
  return (
    <div className="service-page bg-[#103d4e] h-screen">
      <h1 className="text-center text-white pt-6 font-semibold text-4xl">
        OUR <span className="text-[#00e1fa]">PROJECTS</span>
      </h1>

      <div className="cntenr h-screen w-screen max-h-[600px] max-w-[1200px] min-h-[600px] min-w-[1100px] flex justify-around items-center mx-auto">
        <div className="panel relative h-[270px] w-[190px] hover:blur">
          <div className="ring relative flex justify-center items-center text-[#fffbf1] text-[170px] mx-auto">
            <div className="card card1 bg-cover bg-center bg-no-repeat bg-[url('/hbd1.png')] transition-all duration-1000 ease-in-out border border-white h-[270px] w-[190px]"></div>
            <div className="border absolute border border-opacity-50 h-[260px] w-[180px] transition-all duration-1000 overflow-hidden"></div>
            <div className="slide flex flex-col justify-center items-center absolute bottom-[-270px] bg-[rgba(91,91,91,0.5)] h-[260px] w-[180px] transition-all duration-1000">
              <h6 className="para text-center font-medium text-lg text-white p-5">
                This is my 1st project Birthday Celebration App
              </h6>
              <a href="https://project-3-hbd-celebration.vercel.app" target="_blank" className="btn bg-[#00e1fa] text-white p-3 rounded mt-5 transition-all duration-300 hover:shadow-[0_0_25px_2px_rgb(0,225,250)]">
                Click to View
              </a>
            </div>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="panel relative h-[270px] w-[190px] hover:blur">
          <div className="ring relative flex justify-center items-center text-[#fffbf1] text-[170px] mx-auto">
            <div className="card card2 bg-cover bg-center bg-no-repeat bg-[url('/joke1.jpg')] transition-all duration-1000 ease-in-out border border-white h-[270px] w-[190px]"></div>
            <div className="border absolute border border-opacity-50 h-[260px] w-[180px] transition-all duration-1000 overflow-hidden"></div>
            <div className="slide flex flex-col justify-center items-center absolute bottom-[-270px] bg-[rgba(91,91,91,0.5)] h-[260px] w-[180px] transition-all duration-1000">
              <h6 className="para text-center font-medium text-lg text-white p-5">
                This is my 2nd project Random Joke Game App
              </h6>
              <a href="https://project-7-random-joke-app.vercel.app/" target="_blank" className="btn bg-[#00e1fa] text-white p-3 rounded mt-5 transition-all duration-300 hover:shadow-[0_0_25px_2px_rgb(0,225,250)]">
                Click to View
              </a>
            </div>
          </div>
        </div>

        {/* Panel 3 */}
        <div className="panel relative h-[270px] w-[190px] hover:blur">
          <div className="ring relative flex justify-center items-center text-[#fffbf1] text-[170px] mx-auto">
            <div className="card card3 bg-cover bg-center bg-no-repeat bg-[url('/ctrl1.png')] transition-all duration-1000 ease-in-out border border-white h-[270px] w-[190px]"></div>
            <div className="border absolute border border-opacity-50 h-[260px] w-[180px] transition-all duration-1000 overflow-hidden"></div>
            <div className="slide flex flex-col justify-center items-center absolute bottom-[-270px] bg-[rgba(91,91,91,0.5)] h-[260px] w-[180px] transition-all duration-1000">
              <h6 className="para text-center font-medium text-lg text-white p-5">
                This is my 3rd Project IOS Calculator App
              </h6>
              <a href="https://project-5-calculator-app.vercel.app/" target="_blank" className="btn bg-[#00e1fa] text-white p-3 rounded mt-5 transition-all duration-300 hover:shadow-[0_0_25px_2px_rgb(0,225,250)]">
                Click to View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
