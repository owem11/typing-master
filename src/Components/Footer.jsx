import React from 'react';
import { useTheme, themeOptions } from '../Context/ThemeContext';

const Footer = () => {
  const { themeName, setAppTheme } = useTheme();

  const handleChange = (e) => {
    setAppTheme(e.target.value);
  };

  const handleClick = (e) => {
    // Regenerates new random colors on every click if 'random' is selected
    if (e.target.value === 'random') {
      setAppTheme('random');
    }
  };

  return (
    <div className="footer">
      {/* Left: GitHub Hyperlink */}
      <div className="footer-left">
        <a 
          href="https://github.com/owem11/typing-master" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
           github
        </a>
      </div>

      {/* Center: Author Credit */}
      <div className="footer-center">
        created by <a 
          href="https://github.com/owem11" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
           @owem11
        </a>
      </div>

      {/* Right: Theme Selector */}
      <div className="footer-right">
        <select 
          value={themeName} 
          onChange={handleChange} 
          onClick={handleClick}
          className="theme-select"
        >
          {themeOptions.map((opt) => (
            <option key={opt.label} value={opt.label}>
              {opt.label}
            </option>
          ))}
          <option value="random">random</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;