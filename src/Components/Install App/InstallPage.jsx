import React, { useState, useEffect } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
import { MdMobileOff } from 'react-icons/md';
import Logo from '../../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InstallPage = ({  setInstallApps }) => {
  
  const [loading, setLoading] = useState(true);
  const [sortedApps, setSortedApps] = useState([]);
  const [sortType, setSortType] = useState('size');

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    setInstallApps(storedApps);
    setSortedApps(storedApps);
    setLoading(false);
  }, [setInstallApps]);

  const handleUninstall = (id) => {
    toast.warning('Uninstall Complete');
    const updatedApps = sortedApps.filter((app) => app.id !== id);
    setInstallApps(updatedApps);
    setSortedApps(updatedApps);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
  };

  const handleSort = (type) => {
    setSortType(type);
    let sorted = [...sortedApps];
    if (type === 'name') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (type === 'size') {
      sorted.sort((a, b) => a.size - b.size);
    }
    setSortedApps(sorted);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <img src={Logo} alt="Loading..." className="w-16 h-16 animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-[80%] mx-auto mt-16 p-6">
      <div className="bg-white rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Manage all your installed apps from here
        </p>

        {sortedApps.length === 0 ? (
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
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 px-4 py-2 gap-4">
              <p className="font-semibold text-lg">
                {sortedApps.length} app{sortedApps.length !== 1 ? 's' : ''} found
              </p>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">Sort by:</span>
                <button
                  onClick={() => handleSort('size')}
                  className={`px-4 py-2 rounded-full font-semibold transition ${
                    sortType === 'size'
                      ? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Size
                </button>
                <button
                  onClick={() => handleSort('name')}
                  className={`px-4 py-2 rounded-full font-semibold transition ${
                    sortType === 'name'
                      ? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Name
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {sortedApps.map((app) => (
                <div
                  key={app.id}
                  className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center justify-between hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-4 flex-1 w-full">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-xl flex-shrink-0 bg-white p-2"
                    />
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-bold text-gray-900 truncate">
                        {app.title}
                      </h2>
                      <p className="text-gray-500 text-sm mt-1">
                        by {app.companyName}
                      </p>
                      <div className="flex items-center gap-3 mt-2 flex-wrap">
                        <span className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-2 py-1 rounded-full text-sm">
                          <FaStar className="text-sm" />
                          <span className="font-semibold">{app.ratingAvg}</span>
                        </span>
                        <span className="flex items-center gap-1 text-green-500 bg-green-50 px-2 py-1 rounded-full text-sm">
                          <FaDownload className="text-sm" />
                          <span className="font-semibold">{app.downloads}</span>
                        </span>
                        <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded-full">
                          {app.size} MB
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 md:ml-4">
                    <button
                      onClick={() => handleUninstall(app.id)}
                      className="bg-red-500 text-white px-6 py-2 rounded-full font-bold hover:bg-red-600 transition whitespace-nowrap"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default InstallPage;
