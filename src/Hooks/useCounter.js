import { useState } from "react"

export function useCounter() {

 const [count, setCount] = useState(0)

const DicreaseCount = () => {
  if (count > 0)
setCount((count) => count -1)
  }

  const IncreaceCount = () => {
    setCount((count) => count + 1)
  }

return {count, IncreaceCount, DicreaseCount}
}