import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar'
import Home from '../src/components/Home'
import Store from './components/Store'
import Blog from './components/Blog'
 import bgimg from'./components/cover.jpg'

function App() {
  return (
   <Router>
      
    <div className=" " style={{ backgroundImage: `url(${bgimg}) `}}>
      <Navbar/>
      
      <Routes>
      < Route path='/' element={<Home/>}/>
      < Route path='/Store' element={<Store/>}/>
      < Route path='/Blog' element={<Blog/>}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;
