import React from 'react';
import Link from 'next/link';
import TopBar from './TopBar';
import LogoWrap from './LogoWrap';

const Header: React.SFC = () => {
  return (
    <header role="banner">
      <TopBar />
      <LogoWrap content="Rackbrains Africa" />

      <nav className="navbar navbar-expand-md  navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
