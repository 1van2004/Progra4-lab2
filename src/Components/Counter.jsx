import { useCounter } from "../Hooks/useCounter"
export default function Counter(){

const {count, IncreaceCount, DicreaseCount}= useCounter()



function favoriteNumberC(){
if (count === 4){
  return <p>Numero favorito de Carolina</p>
}else{
  return null
}
}

function favoriteNumberI(){
  if (count === 7){
    return <p>-Iván. Ey, ese es mi numero de la suerte!!</p>
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
        {favoriteNumberC()}
        {favoriteNumberI()}
      </div>
)
}