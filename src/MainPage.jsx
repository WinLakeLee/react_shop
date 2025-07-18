import Card from "./components/Card"
import bg from "./bg.jpg"


function MainPage({fruits}) {

  return (
    <>
      <div className="main-bg" style={{ backgroundImage: `url('${bg}')` }}></div>
      <div className="container">
        <div className="row">
          {
            fruits.map((fruit, i) => {
              return (
                <Card fruit={fruit} key={fruit.id} />
              )
            })
          }
        </div>
      </div>
    </>



  )

}
export default MainPage