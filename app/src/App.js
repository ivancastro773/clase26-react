import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <section>
    <div>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </div>
    <Routes>
      <Route index path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </section>
  );
}

export default App;
