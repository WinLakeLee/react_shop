import { useState } from "react"
import { flushSync } from "react-dom";

function TabContent({ tabNumber }) {
  const [fade, setFade] = useState('');
  useEffect(() => {
    const timer = setTimeout(()=> {
      setFade('end')
    }, 10)
    return () => {
      // flushSync(() => {
        setFade ('');
      // })
    }
  }, [tabNumber])

  return (
    <div className={`start ${fade}`}>
      {
        [<div>상세정보</div>, <div>리뷰</div>, <div>교환 및 반품정보</div>][tabNumber]
      }
    </div>
  )
}
export default TabContent