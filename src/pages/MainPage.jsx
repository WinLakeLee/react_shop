import Card from "../components/Card"
import bg from "../bg.jpg"


function MainPage({fruits}) {

  return (
    <>
      <div className="MainPage main-bg b" style={{ backgroundImage: `url('${bg}')`, height:`300px` }}></div>
      <div className="container b">
        <div className="row">
          {
            fruits.map((fruit, i) => {
              return (
                <Card fruit={fruit} key={i} />
              )
            })
          }
        </div>
      </div>
    </>
  )

}
export default MainPage