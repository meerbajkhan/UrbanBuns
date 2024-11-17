import logo from './logo.svg';
import {HashRouter as Router , Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Shop from './Pages/About/Shop';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
   <Route path='/' element= {<Home />} />
   <Route path='/about' element = {<About />} />
   <Route path='/Shop' element = {<Shop />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
