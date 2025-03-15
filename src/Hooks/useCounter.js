import { useState,useEffect } from "react"
export function useCounter() {

  const [count, setCount] = useState(() => Number(localStorage.getItem("count")) || 0);

const DicreaseCount = () => {
  if (count > 0)
setCount((count) => count -1)
  }

  const IncreaceCount = () => {
    setCount((count) => count + 1)
  }

  const Reset = () => {
    setCount(0)
  }

  useEffect(() => {
    localStorage.setItem("count", count);
}, [count]);


return {count, IncreaceCount, DicreaseCount, Reset}
}