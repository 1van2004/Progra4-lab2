import { useCounter } from "../Hooks/useCounter"
export default function Counter(){

const {count, IncreaceCount, DicreaseCount}= useCounter()

function favoriteNumber(){
if (count === 4){
  return <p>Numero favorito de Carolina</p>
}else{
  return null
}
}

return (
<div className="card">
       <p>{count}</p>
        <button onClick={IncreaceCount}>
          ➕ 
        </button>


        <button onClick={DicreaseCount}>
          ➖
        </button>
        {favoriteNumber()}
      </div>
)
}