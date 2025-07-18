import { useParams } from "react-router-dom"

function Detail ({fruits}) {
  const {id} = useParams();

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <img src={`${import.meta.env.BASE_URL}image/${fruits[id].title}.jpg`} alt="" />
        </div>
        <div className="col-md-6">
          <h4>{fruits[id].title}</h4>
          <p>{fruits[id].content}</p>
          <p>{fruits[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail