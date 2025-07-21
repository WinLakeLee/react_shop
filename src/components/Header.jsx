import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const userInfoQuery = useQuery({
    queryKey:['userInfo'],
    queryFn: async () => {
      const userInfo = await axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/useinfo.json')
      return userInfo.data
    }
  })

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate(-1)}>뒤로가기</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="/test">테스트</Nav.Link>
            <Link to="/test">테스트2</Link>
          </Nav>
        </Container>
      </Navbar>
      <QueryClientProvider client={userInfoQuery}>
        {userInfoQuery.data}
      </QueryClientProvider>
    </div>
  )
}

export default Header;