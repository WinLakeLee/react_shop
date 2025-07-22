import { Link, Outlet, useNavigate } from "react-router-dom";

function About() {
  const nav = useNavigate();

  return (
    <>
      <button onClick={() => nav('intro')}>회사 소개</button>
      <button onClick={() => nav("history")}>연혁</button>
      <button  onClick={() => nav("location")}>오시는 길</button>
      <Outlet/>
    </>
  )
}

export default About;