// src/components/NavBar.tsx
import React from 'react';
import ThemeButton from './ThemeButton';

const NavBar: React.FC = () => {
  return (
    <nav className="flex bg-secondary justify-between px-5 py-10 shadow-md" >
      <h1 className="text-body font-semibold tracking-wide" >
        Where in the world?
      </h1>


      <ThemeButton/>
    </nav>
  );
};

export default NavBar;