// src/components/NavBar.tsx
import React from 'react';
import ThemeButton from './ThemeButton';

const NavBar: React.FC = () => {
  return (
    <nav className="flex bg-primary justify-between" >
      <h1 className="text-body w" >
        Where in the world?
      </h1>


      <ThemeButton/>
    </nav>
  );
};

export default NavBar;