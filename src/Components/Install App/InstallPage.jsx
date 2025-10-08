import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';

const InstallPage = ({ installedApps }) => {
  console.log(installedApps);
  
  if (!installedApps || installedApps.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No apps installed yet.</p>;
  }

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {installedApps.map((app) => (
        <div key={app.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-40 object-contain rounded-lg mb-4"
          />
          <h3 className="font-bold text-xl mb-2">{app.title}</h3>
          <div className="flex justify-between text-gray-600">
            <span><FaDownload /> {app.downloads}</span>
            <span><FaStar /> {app.ratingAvg}</span>
            <span><MdReviews /> {app.reviews}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstallPage;
