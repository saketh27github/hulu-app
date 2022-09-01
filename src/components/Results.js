import React from 'react'
import VideoCard from './VideoCard'
import './css/Results.css'
// import FlipMove from 'react-flip-move'

const Results = () => {
  return (
    <div className='results'>
      {

        [...Array(20)].map((_, idx) =>  <VideoCard key={idx}/>)
      }

  
    

    </div>
  )
}

export default Results