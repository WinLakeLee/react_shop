import { Link, useNavigate } from "react-router-dom"

function Card({ fruit}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-md-4">
        <img src={`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/img/${fruit.title}.jpg`} alt="" width='300vw' onClick={() => navigate(`detail/${fruit.id}`)} />
        <h4>{fruit.title}</h4>
        <p>{fruit.content}</p>
        <p>{fruit.price}원</p>
        {/* <img src="" alt="" width='100%'/>
      <h4>상품명</h4>
      <p>상품설명</p> */}
      </div>
    </>
  )
}
export default Card