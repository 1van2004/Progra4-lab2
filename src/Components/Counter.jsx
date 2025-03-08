import { useCounter } from "../Hooks/useCounter"
export default function Counter(){

const {count, IncreaceCount, DicreaseCount}= useCounter()

return (
<div className="card">
       <p>{count}</p>
        <button onClick={IncreaceCount}>
          ➕ 
        </button>


        <button onClick={DicreaseCount}>
          ➖
        </button>
      </div>
)
}