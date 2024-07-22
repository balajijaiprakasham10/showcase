import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  // Determine if the current path is a project page
  const isProjectPage = location.pathname.startsWith('/project');

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''} ${isProjectPage ? 'project-nav' : ''}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        {location.pathname === '/' ? (
          <>
            <li>
              <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="program" smooth={true} offset={-260} duration={500}>
                Work
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} offset={-150} duration={500}>
                About us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} offset={-260} duration={500} className="btn">
                Contact us
              </ScrollLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/project1">Project 1</RouterLink>
            </li>
            <li>
              <RouterLink to="/project2">Project 2</RouterLink>
            </li>
            <li>
              <RouterLink to="/project3">Project 3</RouterLink>
            </li>
          </>
        )}
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
