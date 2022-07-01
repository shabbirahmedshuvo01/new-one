import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddWork from './components/AddWork/AddWork';
import Banner from './components/Banner/Banner';
import Calendar from './components/Calendar/Calendar';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/addwork' element={<AddWork></AddWork>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
