import React, { useState, Suspense } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router';
import { FaStar } from 'react-icons/fa6';
import { FaDownload } from 'react-icons/fa';
import Logo from '../../assets/logo.png';

const Loader = () => (
  <div className="flex justify-center items-center min-h-screen">
    <img src={Logo} alt="Loading..." className="w-16 h-16 animate-spin" />
  </div>
);

const AppsGrid = ({ apps, search }) => {
  const filteredApps = apps.filter((app) =>
    search === ''
      ? true
      : app.title.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredApps.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-20 gap-6">
        <h1 className="text-3xl font-bold text-gray-700">No App Found</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {filteredApps.map((app) => {
        const { image, title, id, reviews, ratingAvg } = app;
        return (
          <Link key={id} to={`/apps/${app.id}`}>
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
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
          </Link>
        );
      })}
    </div>
  );
};

const Apps = () => {
  const apps = useLoaderData();
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  if (navigation.state === 'loading') {
    return <Loader />;
  }

  return (
    <div className="mt-16 px-4 md:px-16 mb-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Our All Applications
      </h1>
      <p className="text-gray-600 text-lg md:text-xl text-center mb-12">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-gray-700 font-semibold text-lg">
          ({apps.length}) apps found
        </h2>

        <input
          type="text"
          placeholder="Search apps..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      <Suspense fallback={<Loader />}>
        <AppsGrid apps={apps} search={search} />
      </Suspense>
    </div>
  );
};

export default Apps;
