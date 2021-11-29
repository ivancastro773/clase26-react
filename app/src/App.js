import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import './components/main';
import './components/style.css';

function App() {
  return (
    <section>
      <nav>
        <ul class="menu">
          <li class="logo">NAV BAR</li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li class="toggle">
            <a href="#" onclick="changeIcon()"><i id="pr" class="fas fa-bars "></i></a>
          </li>
        </ul>
    </nav>
    <Routes>
      <Route index path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </section>
  );
}

export default App;
