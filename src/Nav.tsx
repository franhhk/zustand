import React from 'react';
import { Link } from 'react-router-dom';

const MODULES = ['recoil', 'jotai', 'zustand'];

const generateLink = (module: string) => {
  return (
    <Link to={`/${module}`}>
      <button>{module}</button>
    </Link>
  );
};

const Nav = () => {
  return (
    <>
      <Link to='/'>
        <button>Home</button>
      </Link>

      {MODULES.map((module) => generateLink(module))}
    </>
  );
};

export default Nav;
