import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router';

const TrendingApp = ({ data }) => {
  return (
    <div className="mt-16 px-4 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Trending Apps
      </h1>
      <p className="text-gray-600 text-lg md:text-xl text-center mb-12">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((app) => {
          const { image, title, id, reviews, ratingAvg } = app;
          return (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              
              <div className="relative w-full aspect-[4/3] mb-4">
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-contain bg-gray-50 rounded-xl p-4"
                />
              </div>

              <h3 className="font-bold text-xl md:text-2xl mb-4">{title}</h3>

              <div className="flex justify-between mt-auto gap-3">
                <p className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-semibold">
                  <FaDownload className="text-green-500" /> {reviews}
                </p>
                <p className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-semibold">
                  <FaStar className="text-yellow-400" /> {ratingAvg}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-12">
        <Link to="/apps">
          <button className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#9F62F2] hover:to-[#632EE3] hover:brightness-110 transition-all duration-300 flex items-center gap-2">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApp;
