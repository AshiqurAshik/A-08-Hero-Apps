import React, { Suspense } from 'react';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaAppStoreIos } from 'react-icons/fa';
import BannerImg from '../../assets/hero.png';
import { useLoaderData, Link } from 'react-router';
import Logo from '../../assets/logo.png';

const TrendingApp = React.lazy(() => import('../TrendingApp/trendingApp'));

const Loader = () => (
  <div className="flex justify-center items-center py-16">
    <img src={Logo} alt="Loading..." className="w-16 h-16 animate-spin" />
  </div>
);


const TrendingGrid = ({ apps }) => {
  const displayedApps = apps.slice(0, 8);
  if (displayedApps.length === 0) {
    return <p className="text-center text-gray-500 mt-8">No Trending Apps</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
      {displayedApps.map((app) => {
        const { image, title, id, reviews, ratingAvg } = app;
        return (
          <Link key={id} to={`/apps/${id}`}>
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
  );
};

const Banner = () => {
  const data = useLoaderData();

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
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          <div className="flex gap-4 justify-center items-center mb-10">
            <a
              href="https://play.google.com/store/games?hl=en"
              className="flex items-center gap-2 px-4 py-2 border-2 border-[#3DDC84] text-[#3DDC84] rounded hover:bg-[#3DDC84] hover:text-white transition cursor-pointer"
            >
              <IoLogoGooglePlaystore className="w-6 h-6" />
              Google Play
            </a>

            <a
              href="https://www.apple.com/app-store/"
              className="flex items-center gap-2 px-4 py-2 border-2 border-[#0A84FF] text-[#0A84FF] rounded hover:bg-[#0A84FF] hover:text-white transition cursor-pointer"
            >
              <FaAppStoreIos className="w-6 h-6" />
              App Store
            </a>
          </div>

          <div className="flex justify-center">
            <img src={BannerImg} alt="Banner" />
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

          <Suspense fallback={<Loader />}>
            <TrendingGrid apps={data} />
          </Suspense>
        </div>
      </div>

      <div className="flex justify-center mt-8 mb-10">
  <Link
    to="/apps"
    className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 hover:scale-105 transform transition-all duration-300"
  >
    Show All
  </Link>
</div>

    </div>
  );
};

export default Banner;
