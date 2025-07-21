import Card from "../components/Card"
import bg from "../bg.jpg"
import { useState } from "react";


function MainPage({ fruits }) {

  const [fruitCount, setFruitCount] = useState(3);
  const visibleFruit = fruits.slice(0, fruitCount);

  return (
    <>
      <div className="MainPage main-bg b" style={{ backgroundImage: `url('${bg}')`, height: `300px` }}></div>
      <div className="container b">
        <div className="row">
          {
            visibleFruit.map((fruit, i) => {
              return (
                <Card fruit={fruit} key={i} />
              )
            })
          }
        </div>
      </div>
      {
        fruitCount > fruits.length ?
          <div className="alert alert-danger">더 이상 상품이 없습니다</div>
          :
          <button onClick={() => {
            setFruitCount(fruitCount + 3);
          }}>3개 더보기</button>
      }
    </>
  )

}
export default MainPage