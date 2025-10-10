import React from 'react';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaAppStoreIos } from 'react-icons/fa';
import BannerImg from '../../assets/hero.png';
import { useLoaderData, Link } from 'react-router';
import Logo from '../../assets/logo.png';
import TrendingApp from '../TrendingApp/trendingApp';

const Banner = () => {
  const data = useLoaderData();
  const displayedApps = data.slice(0, 8);

  return (
    <div className="bg-base-200 min-h-screen flex flex-col items-center">
      <section className="text-center mt-20 w-full max-w-6xl px-4">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{' '}
          Apps
        </h1>

        <p className="py-6 text-gray-600 lg:w-[60%] mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex gap-4 justify-center items-center mb-10">
          <a
            href="https://play.google.com/store/games?hl=en"
            className="flex items-center gap-2 px-5 py-2 border-2 border-[#3DDC84] text-[#3DDC84] rounded-full hover:bg-[#3DDC84] hover:text-white transition"
          >
            <IoLogoGooglePlaystore className="w-6 h-6" />
            Google Play
          </a>

          <a
            href="https://www.apple.com/app-store/"
            className="flex items-center gap-2 px-5 py-2 border-2 border-[#0A84FF] text-[#0A84FF] rounded-full hover:bg-[#0A84FF] hover:text-white transition"
          >
            <FaAppStoreIos className="w-6 h-6" />
            App Store
          </a>
        </div>

        <div className="flex justify-center ">
          <img
            src={BannerImg}
            alt="Banner"
            className="max-w-full md:max-w-3xl object-contain"
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-16 text-white w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Trusted by Millions, Built for You
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-center w-full">
          <div>
            <p className="opacity-80">Total Downloads</p>
            <h1 className="text-4xl font-bold">29.6M</h1>
            <p className="opacity-80">21% more than last month</p>
          </div>

          <div>
            <p className="opacity-80">Total Reviews</p>
            <h1 className="text-4xl font-bold">906K</h1>
            <p className="opacity-80">46% more than last month</p>
          </div>

          <div>
            <p className="opacity-80">Active Apps</p>
            <h1 className="text-4xl font-bold">132+</h1>
            <p className="opacity-80">31 more will launch</p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Trending Apps</h1>
          <p className="text-gray-600">
            Explore all trending apps on the market developed by us
          </p>
        </div>

        {displayedApps.length === 0 ? (
          <p className="text-center text-gray-500">No Trending Apps</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayedApps.map((app) => {
              const { image, title, id, reviews, ratingAvg } = app;
              return (
                <Link key={id} to={`/apps/${id}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition transform hover:-translate-y-1 flex flex-col">
                    <div className="relative w-full aspect-[4/3] mb-4">
                      <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-contain bg-gray-50 rounded-xl p-4"
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-4">{title}</h3>
                    <div className="flex justify-between mt-auto gap-3">
                      <p className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-semibold">
                        <span className="text-green-500">⬇</span> {reviews}
                      </p>
                      <p className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-semibold">
                        <span className="text-yellow-400">★</span> {ratingAvg}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      <div className="flex justify-center mb-16">
        <Link
          to="/apps"
          className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 hover:scale-105 transform transition-all duration-300"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Banner;
