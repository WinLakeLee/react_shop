function Card({ fruit }) {
  
  return (
    <div className="col-md-4">
      <img src={`${import.meta.env.BASE_URL}image/${fruit.title}.jpg`} alt="" width='300vw' />
      <h4>{fruit.title}</h4>
      <p>{fruit.content}</p>
      <p>단돈 {fruit.price}원!</p>
      {/* <img src="" alt="" width='100%'/>
      <h4>상품명</h4>
      <p>상품설명</p> */}
    </div>
  )
}
export default Card