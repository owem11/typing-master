import TypingBox from './Components/TypingBox';
import Footer from './Components/Footer';
import { GlobalStyles } from './Styles/global';
import { useTheme } from './Context/ThemeContext';
import { ThemeProvider } from 'styled-components';

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <div className="header">Typing Master</div>
        <TypingBox />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;