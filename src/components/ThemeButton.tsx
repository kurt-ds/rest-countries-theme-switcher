
"use client";
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';

const ThemeButton: React.FC = () => {

  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="text-body" >
      { theme === "dark" ? "Light Mode": "Dark Mode"}
    </button>
  )
}

export default ThemeButton;