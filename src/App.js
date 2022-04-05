import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import NotFoundLink from './components/NotFountLink/NotFoundLink';
import About from './components/About/About';
import CustomerData from './components/CustomerData/CustomerData';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <CustomerData></CustomerData>
      <Routes>
        <Route path='/' element={<Home></Home> }></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard> }></Route>
        <Route path='/blogs' element={<Blogs></Blogs> }></Route>
        <Route path='/about' element={<About></About> }></Route>
        <Route path='*' element={<NotFoundLink></NotFoundLink> }></Route>
        
      </Routes>
    </div>
  );
}

export default App;
