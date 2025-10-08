import React from 'react';
import { Link } from 'react-router';
import ErrorImage from "../../assets/404 page lost.png";

const ErrorPage = () => {
  return (
    <div
      className="relative bg-white w-full h-screen  flex items-center justify-center"
      style={{ backgroundImage: `url(${ErrorImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
    >
      <Link
        to="/"
        className="absolute bottom-20 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
