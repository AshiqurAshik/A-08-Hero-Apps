import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaDownload } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { MdReviews } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
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

const AppDetail = ({ installApps, setInstallApps }) => {
  const { id } = useParams();
  const apps = useLoaderData();
  const appID = parseInt(id);
  const singleApp = apps.find((app) => app.id === appID);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    setInstallApps(storedApps);
    if (storedApps.find((app) => app.id === appID)) {
      setInstalled(true);
    }
  }, [appID, setInstallApps]);

  if (!singleApp) return <AppErrorpage />;

  const reversedRatings = [...singleApp.ratings].reverse();

  const handleInstall = () => {
    if (installed) return;

    const updatedApps = installApps.find((app) => app.id === singleApp.id)
      ? installApps
      : [...installApps, singleApp];

    setInstallApps(updatedApps);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    setInstalled(true);

    toast.success(
      <div className="flex items-center gap-2">
        <span>Install Completed!</span>
      </div>
    );
  };

  return (
    <div className="w-[80%] mx-auto mt-16 bg-white rounded-2xl p-8">
      <div className="flex md:flex-row flex-col items-center md:items-start gap-6">
        <img
          src={singleApp.image}
          alt={singleApp.title}
          className="w-32 h-32 md:w-48 md:h-48 object-contain rounded-xl"
        />
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-center sm:text-left">
            {singleApp.title}
          </h1>
          <p className="text-gray-500 mt-1">
            Developed by{' '}
            <span className="text-purple-600 font-semibold">
              {singleApp.companyName}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="flex flex-col items-center bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-green-500 text-xl">
                <FaDownload />
              </span>
              <span className="font-bold">{singleApp.downloads}</span>
              <span className="text-gray-500 text-sm w-full text-center">
                Downloads
              </span>
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

      <div className="mt-10 w-full md:w-[80%] h-64">
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

      <ToastContainer />
    </div>
  );
};

export default AppDetail;
