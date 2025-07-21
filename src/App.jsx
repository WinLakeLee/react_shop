import data from './mokData.js'
import style from './App.module.css'
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Header from './Header';
import Detail from './pages/Detail';
import About from './pages/About';
import styled from 'styled-components';
import axios from 'axios';

function App() {
  // const Btn = styled.button`
  //   background: ${props => props.bg};
  //   color: ${props => props.bg === 'blue' ? 'white' : 'black'};
  //   font-size: 30px;
  //   border: 1px solid red;
  // `
  // const Div = styled.div`
  //   padding:20px;
  //   background: skyblue;
  // `
  // const Btn2 = styled(Btn)`
  //   width:200px;
  //   height:200px;
  // `

  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/fruit.json`)
      .then((res) => {
        setFruits([...res.data])
      })
      .catch((err) => {
        console.log(err);
      })
  },);
  

  return (
    <div className={style.container}>
      {/* <Div>
        <Btn bg='pink'>버튼</Btn>
        <Btn bg='blue'>버튼</Btn>
        <Btn2 bg='yellowgreen'>버튼</Btn2>
      </Div> */}
      <Header />
      <Routes>
        <Route path='/' element={<h1>{<MainPage fruits={fruits} />}</h1>} />
        <Route path='/detail/:id' element={<Detail fruit={fruits} />} />
        <Route path='/test' element={<h1>테스트 페이지</h1>} />
        <Route path='/about' element={<About />}>
          <Route path='intro' element={<div>회사 소개</div>} />
          <Route path='history' element={<div>연혁</div>} />
          <Route path='location' element={<div>오시는 길</div>} />
        </Route>
        <Route path='*' element={<h1>존재하지 않는 페이지</h1>} />
      </Routes>

      <button onClick={() => {
        axios.get(`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/morefruit.json`)
          .then((response) => {
            setFruits([...fruits, ...response.data])
          })
          .catch((e) => {
            console.log(e);
          })
      }}>더보기</button>
      <button>과일정보 받아오기</button>
    </div>
  )
}

export default App
