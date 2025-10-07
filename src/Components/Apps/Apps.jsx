import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaStar } from 'react-icons/fa6';
import { FaDownload } from 'react-icons/fa';

const Apps = () => {
  const apps = useLoaderData();

  return (
    
    <div className="mt-16 px-4 md:px-16 mb-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Our All Applications
      </h1>
      <p className="text-gray-600 text-lg md:text-xl text-center mb-12">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {apps.map((app) => {
          const { image, title, id, reviews, ratingAvg } = app;
          return (
            <Link key={id} to={`/apps/${app.id} ` }>
              <div
                
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Apps;
