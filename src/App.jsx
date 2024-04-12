import { useState } from 'react'
import React from 'react'
import './App.css'
import Card from './Components/Card'
import Navbar from './Components/Navbar'

function App() {

  const info = [
    {
      image:"https://weekendleave.com/in/wp-content/uploads/2022/08/pravin-tarde.jpg",
      name:"Ararara Khatarnak",
      artist:"Anand",
      added:false
    },
    {
      image:"https://1.bp.blogspot.com/-b7qKXYIcCVE/XUxYtSJr-vI/AAAAAAAAeG0/63tcd_JlreguXI14LIQvnPP2LIq5UhXtwCLcBGAs/s1600/raanjhanaa-movie-press-meet-in-new-delhi-sonam-kapoor-dhanush-krishika-lulla-40120.jpg",
      name:"Y this Kolaveri",
      artist:"Dhanush",
      added:false
    },
    {
      image:"https://i1.wp.com/filmitamasha.com/wp-content/uploads/2020/06/Vikram-22.jpg?resize=749%2C850&ssl=1",
      name:"Rowdy Baby",
      artist:"Vikram",
      added:false
    },
    {
      image:"https://i.pinimg.com/originals/dd/d1/e4/ddd1e499a601d0b942ba81130daae7e1.jpg",
      name:"Ram siya ram",
      artist:"Arijit",
      added:false
    }

  ]

  const [data ,setData] = useState(info);

  function handleFavBtn(cardIndex){
    setData((prev)=>(
      prev.map((value,index)=>{
        if(index === cardIndex){
          return {...value, added : !value.added}
        }
        return value;
      })
    ))
  }


  return (
    <div className='w-full h-screen bg-zinc-200 overflow-y-auto '>
      <Navbar information={data}/>
      <div className='w-[75%]  m-auto gap-x-8 gap-y-8 flex-wrap flex justify-center items-center '>
        {data.map((value, index) => (
          <Card key={index} cardIndex={index} handleClick={handleFavBtn} values={value} />
        ))}    
      </div>
    </div>
  )
}

export default App;
