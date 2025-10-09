import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router';
import { FaGithub, FaAppStore } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import { MdOutlineInstallDesktop } from 'react-icons/md';

const Header = () => {
  return (
    <nav className="navbar bg-base-100 shadow-sm lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="flex items-center gap-2 group">
                <GoHome className="transition-colors group-hover:text-purple-600" /> Home
              </Link>
            </li>
            <li>
              <Link to="/apps" className="flex items-center gap-2 group">
                <FaAppStore className="transition-colors group-hover:text-purple-600" /> Apps
              </Link>
            </li>
            <li>
              <Link to="/install" className="flex items-center gap-2 group">
                <MdOutlineInstallDesktop className="transition-colors group-hover:text-purple-600" /> Installation
              </Link>
            </li>
          </ul>
        </div>

        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <img src={Logo} alt="logo" className="w-10" />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-6 text-lg font-semibold">
          <li>
            <Link to="/" className="flex items-center gap-2 group transition-all">
              <GoHome className="transition-colors group-hover:text-purple-600" /> Home
            </Link>
          </li>
          <li>
            <Link to="/apps" className="flex items-center gap-2 group transition-all">
              <FaAppStore className="transition-colors group-hover:text-purple-600" /> Apps
            </Link>
          </li>
          <li>
            <Link to="/install" className="flex items-center gap-2 group transition-all">
              <MdOutlineInstallDesktop className="transition-colors group-hover:text-purple-600" /> Installation
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/AshiqurAshik"
          className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#9F62F2] hover:to-[#632EE3] hover:brightness-110 transition-all duration-300 flex items-center gap-2"
        >
          <FaGithub /> Contribute
        </a>
      </div>
    </nav>
  );
};

export default Header;
