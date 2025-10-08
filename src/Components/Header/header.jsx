import React from 'react';
import Logo from '../../assets/logo.png';
import { Link, Links } from 'react-router';
import { FaGithub } from 'react-icons/fa';

const header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link to="/">Home</Link>
            <Link to="/apps">Apps</Link>
            <Link to="/install">Installation</Link>
          </ul>
        </div>
        <a className="text-xl flex items-center font-bold">
          <img className="w-[40px]" src={Logo} alt="logo" />
          <Link
            to="/"
            className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ml-2"
          >
            HERO.IO
          </Link>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex gap-4 ">
        <div className="flex gap-6 text-lg font-semibold">
          <Link
            to="/"
            className="hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent transition-all"
          >
            Home
          </Link>
          <Link
            to="/apps"
            className="hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent transition-all"
          >
            Apps
          </Link>
          <Link
            to="/install"
            className="hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent transition-all"
          >
            Installation
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <a href='https://github.com/AshiqurAshik' className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#9F62F2] hover:to-[#632EE3] hover:brightness-110 transition-all duration-300 flex items-center gap-2">
          <FaGithub />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default header;
