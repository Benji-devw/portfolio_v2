import { useState } from "react"

const useMove = () => {
  const [coords, setCoords] = useState({x: 0, y: 0})

  const handleMouseMove = (e: any) => {
    e.persist()
      setCoords({
        x: e.clientX - e.target.offsetLeft ,
        y: e.clientY - e.target.offsetTop ,
      });
  }
  return {
    x: coords.x,
    y: coords.y,
    handleMouseMove,
  }
}
export { useMove };