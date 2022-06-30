import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddWork from './components/AddWork/AddWork';
import Banner from './components/Banner/Banner';
import DailyTasks from './components/DailyTasks/DailyTasks';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/addwork' element={<AddWork></AddWork>}></Route>
      </Routes>
      <DailyTasks></DailyTasks>
    </div>
  );
}

export default App;
