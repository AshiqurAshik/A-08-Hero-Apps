import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { FaDownload } from 'react-icons/fa';

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
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-xl mb-4 flex-shrink-0"
              />
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
        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition cursor-pointer">
          Show All
        </button>
      </div>
    </div>
  );
};

export default TrendingApp;
