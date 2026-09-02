import { createContext, useContext, useState } from 'react';

export const themeOptions = [
  { label: 'default', value: { bg: '#323437', main: '#e2b714', sub: '#646669', text: '#d1d0c5', error: '#ca4754' } },
  { label: 'white', value: { bg: '#ffffff', main: '#2b2b2b', sub: '#888888', text: '#111111', error: '#d9534f' } },
  { label: 'terminal', value: { bg: '#0d1117', main: '#00ff66', sub: '#006622', text: '#00ff41', error: '#ff3333' } },
];
const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeOptions[0].value);
  const [themeName, setThemeName] = useState('default');

  const setAppTheme = (selectedOption) => {
    if (selectedOption === 'random') {
      const randomTheme = {
        bg: getRandomColor(),
        main: getRandomColor(),
        sub: getRandomColor(),
        text: getRandomColor(),
        error: '#ca4754',
      };
      setTheme(randomTheme);
      setThemeName('random');
    } else {
      const foundOption = themeOptions.find((opt) => opt.label === selectedOption);
      if (foundOption) {
        setTheme(foundOption.value);
        setThemeName(foundOption.label);
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, setAppTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);