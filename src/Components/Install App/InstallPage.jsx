import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
import { MdMobileOff } from 'react-icons/md';

const InstallPage = ({ installApps, setInstallApps }) => {
  const handleUninstall = (id) => {
    setInstallApps((prev) => prev.filter((app) => app.id !== id));
  };

  return (
    <div className="w-[80%] mx-auto mt-16 p-6">
      <div className="bg-white rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Manage all your installed apps from here
        </p>

        {installApps.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            <div className="text-6xl mb-4 flex justify-center">
              <MdMobileOff />
            </div>
            <p className="text-xl font-semibold">No apps installed yet</p>
            <p className="mt-2 mb-6 text-gray-400">
              Install apps from the app details page to see them here
            </p>
            <Link
              to="/apps"
              className="bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition"
            >
              Browse Apps
            </Link>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6 px-4 py-2">
              <p className="font-semibold text-lg">
                {installApps.length} app{installApps.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {installApps.map((app) => (
                <div
                  key={app.id}
                  className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center justify-between hover:shadow-lg transition w-full"
                >
                  <div className="flex items-center gap-4 mb-4 md:mb-0 flex-1 min-w-0">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-24 h-24 object-contain rounded-xl flex-shrink-0 bg-white p-2"
                    />
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-bold truncate">
                        {app.title}
                      </h2>
                      <p className="text-gray-500 text-sm truncate">
                        by {app.companyName}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-2 py-1 rounded-full">
                          <FaStar className="text-sm" />
                          <span className="font-semibold">{app.ratingAvg}</span>
                        </span>
                        <span className="flex items-center gap-1 text-green-500 bg-green-50 px-2 py-1 rounded-full">
                          <FaDownload className="text-sm" />
                          <span className="font-semibold">{app.downloads}</span>
                        </span>
                        <span className="text-gray-500 text-sm">
                          {app.size} MB
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleUninstall(app.id)}
                    className="bg-red-500 text-white px-6 py-2 rounded-full font-bold hover:bg-red-600 transition mt-4 md:mt-0"
                  >
                    Uninstall
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstallPage;