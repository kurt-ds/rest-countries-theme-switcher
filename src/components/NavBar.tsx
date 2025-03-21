// src/components/NavBar.tsx
import React from 'react';
import ThemeButton from './ThemeButton';

const NavBar: React.FC = () => {
  return (
    <nav className="flex bg-secondary w-full justify-between px-5 py-8 shadow-md xl:px-20 xl:py-6" >
      <h1 className="text-body font-semibold tracking-wide" >
        Where in the world?
      </h1>


      <ThemeButton/>
    </nav>
  );
};

export default NavBar;