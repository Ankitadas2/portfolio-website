import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home.';
import Aos from 'aos';

function App() {
  Aos.init();
  return (
    <div className="App">
      
     <Home></Home>
    </div>
  );
}

export default App;
