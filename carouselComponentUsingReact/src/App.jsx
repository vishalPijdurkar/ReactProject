import { useState } from 'react'
import './App.css'
import Carousel from './componets/Carousel'

const carouselImges = [
  "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1527489377706-5bf97e608852?q=80&w=2159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

function App() {
  const [index, setIndex] = useState(0);

  const next = ()=>{
    setIndex(prev=>(prev+1)%carouselImges.length)
  }

  const previous= ()=>{
    setIndex(prev=>prev===0?carouselImges.length-1:prev-1)
  }
  return (
    <>
      <Carousel imgUrl={carouselImges[index]} next={next}  previous={previous}/>
    </>
  )
}

export default App
