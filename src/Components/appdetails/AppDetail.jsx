// import React, { useState } from 'react';
// import { useLoaderData, useParams } from 'react-router';
// import { FaDownload, FaStar } from "react-icons/fa";
// import { MdReviews } from "react-icons/md";
// import { Bar, BarChart, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

// const AppDetail = () => {
//   const {id} = useParams();
//   const appID = parseInt(id);
//   const apps = useLoaderData();
//   const singleApp = apps.find(app => app.id === appID);


//   const sortedRatings = [...singleApp.ratings].sort((a, b) => {
//     const getStarNumber = (str) => parseInt(str);
//     return getStarNumber(b.name) - getStarNumber(a.name);
//   });

//     const [installed, setInstalled] = useState(false);

//   const handleInstall = () => {
//     setInstalled(true);
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-16 bg-white rounded-2xl shadow-lg p-8">

//       <div className="flex md:flex-row flex-col items-center md:items-start gap-6">
//         <img
//           src={singleApp.image}
//           alt={singleApp.title}
//           className="w-32 h-32 md:w-48 md:h-48 object-contain rounded-xl"
//         />
//         <div className="flex-1">
//           <h1 className="text-2xl md:text-3xl font-bold">{singleApp.title}</h1>
//           <p className="text-gray-500 mt-1">
//             Developed by <span className="text-purple-600 font-semibold">{singleApp.companyName}</span>
//           </p>

//           <div className="flex flex-wrap gap-4 mt-4">
//             <div className="flex flex-col items-center bg-gray-100 px-4 py-2 rounded-lg">
//               <span className="text-green-500 text-xl"><FaDownload /></span>
//               <span className="font-bold">{singleApp.downloads}</span>
//               <span className="text-gray-500 text-sm">Downloads</span>
//             </div>
//             <div className="flex flex-col items-center bg-gray-100 px-4 py-2 rounded-lg">
//               <span className="text-yellow-400 text-xl"><FaStar /></span>
//               <span className="font-bold">{singleApp.ratingAvg}</span>
//               <span className="text-gray-500 text-sm">Average Ratings</span>
//             </div>
//             <div className="flex flex-col items-center bg-gray-100 px-4 py-2 rounded-lg">
//               <span className="text-purple-500 text-xl"><MdReviews /></span>
//               <span className="font-bold">{singleApp.reviews}</span>
//               <span className="text-gray-500 text-sm">Total Reviews</span>
//             </div>
//           </div>

//           <button
//             onClick={handleInstall}
//             disabled={installed}
//             className={`mt-6 px-6 py-3 rounded-full font-bold transition ${
//               installed
//                 ? 'bg-gray-400 text-white cursor-not-allowed'
//                 : 'bg-green-500 text-white hover:bg-green-600'
//             }`}
//           >
//             {installed ? 'Installed' : `Install Now (${singleApp.size} MB)`}
//           </button>
//         </div>
//       </div>

//       <div className="mt-10 flex justify-center">
//         <BarChart
//           width={550}
//           height={240}
//           data={sortedRatings}
//           layout="vertical"
//           margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis type="number" />
//           <YAxis type="category" dataKey="name" />
//           <Tooltip />
//           <Bar dataKey="count" fill="#34D399" />
//         </BarChart>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-xl font-semibold mb-2">Description</h2>
//         <p className="text-gray-600 leading-relaxed">{singleApp.description}</p>
//       </div>
//     </div>
//   );
// };

// export default AppDetail;
