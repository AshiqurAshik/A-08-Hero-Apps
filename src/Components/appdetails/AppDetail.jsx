import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaDownload } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { MdReviews } from 'react-icons/md';
import {
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import AppErrorpage from '../Error/AppErrorpage';
import InstallPage from '../Install App/InstallPage';

const AppDetail = ({ installApps, setInstallApps }) => {
  const { id } = useParams();
  const apps = useLoaderData();
  const appID = parseInt(id);
  const singleApp = apps.find((app) => app.id === appID);

  const [installed, setInstalled] = useState(false);

  if (!singleApp) return <AppErrorpage></AppErrorpage>;

  const reversedRatings = [...singleApp.ratings].reverse();

  const handleInstall = () => {
    setInstalled(true);

    if (!installApps.find((app) => app.id === singleApp.id)) {
      setInstallApps((prev) => [...prev, singleApp]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-16 bg-white rounded-2xl shadow-lg p-8">
      <div className="flex md:flex-row flex-col items-center md:items-start gap-6">
        <img
          src={singleApp.image}
          alt={singleApp.title}
          className="w-32 h-32 md:w-48 md:h-48 object-contain rounded-xl"
        />
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold">{singleApp.title}</h1>
          <p className="text-gray-500 mt-1">
            Developed by{' '}
            <span className="text-purple-600 font-semibold">
              {singleApp.companyName}
            </span>
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex flex-col items-center bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-green-500 text-xl">
                <FaDownload />
              </span>
              <span className="font-bold">{singleApp.downloads}</span>
              <span className="text-gray-500 text-sm">Downloads</span>
            </div>
            <div className="flex flex-col items-center bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-yellow-400 text-xl">
                <FaStar />
              </span>
              <span className="font-bold">{singleApp.ratingAvg}</span>
              <span className="text-gray-500 text-sm">Average Ratings</span>
            </div>
            <div className="flex flex-col items-center bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-purple-500 text-xl">
                <MdReviews />
              </span>
              <span className="font-bold">{singleApp.reviews}</span>
              <span className="text-gray-500 text-sm">Total Reviews</span>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-6 px-6 py-3 rounded-full font-bold transition ${
              installed
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            {installed ? 'Installed' : `Install Now (${singleApp.size} MB)`}
          </button>
        </div>
      </div>

      <div className="mt-10 w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={reversedRatings}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Bar dataKey="count" fill="#34D399" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-600 leading-relaxed">{singleApp.description}</p>
      </div>
    </div>
  );
};

export default AppDetail;
