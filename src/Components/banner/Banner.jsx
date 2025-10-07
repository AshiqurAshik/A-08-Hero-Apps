import React from 'react';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaAppStoreIos } from 'react-icons/fa';
import BannerImg from '../../assets/hero.png';

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen flex flex-col justify-center">
      <div className="hero-content text-center w-full flex flex-col items-center">
        <div className="mt-20 w-full">
          <h1 className="text-5xl font-bold">
            We Build <br />
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ml-2">
              Productive
            </span>{' '}
            Apps
          </h1>
          <p className="py-6 lg:w-[60%] mx-auto text-gray-600">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex gap-4 justify-center items-center mb-10">
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#3DDC84] text-[#3DDC84] rounded hover:bg-[#3DDC84] hover:text-white transition cursor-pointer">
              <IoLogoGooglePlaystore className="w-6 h-6 " />
              Google Play
            </button>

            <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#0A84FF] text-[#0A84FF] rounded hover:bg-[#0A84FF] hover:text-white transition cursor-pointer">
              <FaAppStoreIos className="w-6 h-6 " />
              App Store
            </button>
          </div>

          <div className="flex justify-center">
            <img src={BannerImg} alt="" />
          </div>


          <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-16 text-white rounded-2xl w-full ">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Trusted by Millions, Built for You
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-10 md:gap-16 text-center w-full">
              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base opacity-80">
                  Total Downloads
                </p>
                <h1 className="text-3xl md:text-4xl font-bold">29.6M</h1>
                <p className="text-sm md:text-base opacity-80">
                  21% more than last month
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base opacity-80">Total Reviews</p>
                <h1 className="text-3xl md:text-4xl font-bold">906K</h1>
                <p className="text-sm md:text-base opacity-80">
                  46% more than last month
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base opacity-80">Active Apps</p>
                <h1 className="text-3xl md:text-4xl font-bold">132+</h1>
                <p className="text-sm md:text-base opacity-80">
                  31 more will launch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
