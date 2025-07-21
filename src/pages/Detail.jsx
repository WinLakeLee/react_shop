import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Detail({ fruit }) {
  const { id } = useParams()
  const [alert, setAlert] = useState(true)
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)

  const selectedFruit = fruit[id]
  console.log(selectedFruit)
  if (!selectedFruit) return (<div>해당 상품이 없습니다</div>)

  // useEffect는 html 렌더링이 완료된 후 실행된다
  useEffect(() => {
    // 여기에 작성된 모든 코드들은 마운트, 업데이트 될 때 실행
    console.log('detail component useEffect');
    setTimeout(() => {
      setAlert(false)
    }, 5000);

  }, []) // 의존성 배열 - 변경 감지된 state, props 설정에 따라 실행 여부가 결정



  useEffect(() => {
    
    console.log('useEffect 확인용');
  }, [num])
  

  console.log('그냥 밖에 있는 console log');


  return (
    <div className="container mt-3">
      <button onClick={() => setNum(num+1)}>버튼1</button>{num}
      <button onClick={() => setNum2(num2+1)}>버튼2</button>{num2}
      {
        alert ?
          <div className="alert alert-danger">
            5초 안에 구매하면 공짜
          </div> : ""
      }
      <div className="row">
        <div className="col-md-6">
          <img src={`${import.meta.env.BASE_URL}image/${fruit[id].title}.jpg`} alt="" />
        </div>
        <div className="col-md-6">
          <h4>{fruit[id].title}</h4>
          <p>{fruit[id].content}</p>
          <p>{fruit[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail