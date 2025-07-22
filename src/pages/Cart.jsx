import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { incCount, decCount, removeItem } from "../redux/store";

function Cart() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  console.log(cart)

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.count}</td>
                  <td>
                    <button onClick={() => { dispatch(incCount(i)) }}>+</button>
                    <button onClick={() => { dispatch(decCount(i)) }}>-</button>
                  </td>
                  <td><button onClick={() => { dispatch(removeItem(i)) }}>X</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </>
  )
}

export default Cart