import './App.css'
import data from "./mokData"
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Header from './Header';
import Detail from './pages/Detail';

function App() {
  const [fruits, setFruits] = useState(data);
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<h1>{<MainPage fruits={fruits}/>}</h1>}/>
        <Route path='/detail/:id' element={<Detail fruits={fruits}/>}></Route>
        <Route path='/test' element={<h1>테스트 페이지</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App
