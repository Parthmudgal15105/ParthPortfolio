import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close, github } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        {/* Brand */}
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Parth Mudgal <span className='sm:block hidden'>| MAIT</span>
          </p>
        </Link>

        {/* Desktop nav */}
        <ul className='list-none hidden sm:flex flex-row gap-8 items-center'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[16px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          {/* Social / external links */}
          <li>
            <a
              href="https://github.com/Parthmudgal15105"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center'
              title="GitHub"
            >
              <img
                src={github}
                alt="github"
                className='w-5 h-5 object-contain invert opacity-60 hover:opacity-100 transition-opacity'
              />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/parth-mudgal-aa0961240"
              target="_blank"
              rel="noopener noreferrer"
              className='text-secondary hover:text-white transition-colors text-[15px] font-medium'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://codeduel.online"
              target="_blank"
              rel="noopener noreferrer"
              className='text-[#915eff] text-[14px] font-semibold border border-[#915eff] px-3 py-1 rounded-md hover:bg-[#915eff] hover:text-white transition-all'
            >
              codeduel.online ↗
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/Parthmudgal15105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-secondary font-medium text-[16px]'
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/parth-mudgal-aa0961240"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-secondary font-medium text-[16px]'
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
