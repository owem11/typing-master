import TypingBox from './Components/TypingBox';
import {GlobalStyles} from './Styles/global';


function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <div className="header">Header</div>
      <TypingBox/>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
