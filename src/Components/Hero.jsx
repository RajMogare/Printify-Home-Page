import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { LiaArrowCircleRightSolid } from "react-icons/lia";
import Lottie from "lottie-react";
import lady from "./lady.json";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row mt-1 justify-between">
      {/* info and features section */}
      <div className="mt-1 md:mt-60 order-2 md:order-1 px-4 flex-1">
        <div className="px-4 md:pl-20">
          <h1 className="text-[30px] w-[96%] md:w-[90%] md:text-[55px] font-bold text-[#17262b]">
            Create and sell custom products
          </h1>

          <ul className="mt-5">
            <div className="flex gap-2 items-center justify-start">
              <GoArrowUpRight className="text-[#39b75d]" />
              <li>100% Free to use</li>
            </div>
            <div className="flex gap-2 items-center justify-start mt-2">
              <GoArrowUpRight className="text-[#39b75d]" />
              <li>900+ High-Quality Products</li>
            </div>
            <div className="flex gap-2 items-center justify-start mt-2">
              <GoArrowUpRight className="text-[#39b75d]" />
              <li>Largest global print network</li>
            </div>
          </ul>

          <div className="flex gap-4 mt-5">
            <button className="border px-4 py-1.5 bg-[#39b75d] text-white font-medium rounded-sm hover:bg-[#2c8a46]">
              Start for Free
            </button>
            <button className="border px-4 py-1.5 flex justify-center items-center gap-2">
              <LiaArrowCircleRightSolid />
              <span>How it works?</span>
            </button>
          </div>

          <p className="text-[#39b75d] mt-4 font-medium mb-5">
            Trusted by over 8M sellers around the world
          </p>
        </div>
      </div>

      {/* image section */}
      <div className="mt-14 order-1 flex-1">
        <div>
          <Lottie animationData={lady} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
