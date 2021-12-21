
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Navbar/>
      {/* <MainPage/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
