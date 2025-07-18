import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'
import bg from './bg.jpg'
import data from "./mokData"
import Card from './components/Card';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [fruits, setFruits] = useState(data);
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<h1>루트 페이지</h1>}/>
        <Route path='/test' element={<h1>테스트 페이지</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App
