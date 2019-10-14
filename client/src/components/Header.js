import React from 'react'
import { useTomatoMode } from '../hooks/useTomatoMode';



const Header = () => {
  const [tomatoMode, setTomatoMode] = useTomatoMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setTomatoMode(!tomatoMode);
  };
  return (
    <nav className="header">
      <h1>Women's World Cup</h1>
      <div>
      <button 
          onClick={toggleMode}
          className={tomatoMode ? 'toggle toggled' : 'null'} >Click Me!</button>
       
      </div>
    </nav>
  );
};

export default Header;