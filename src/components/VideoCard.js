import React, { useState } from 'react'
import {MdPoll} from 'react-icons/md'
import { FaImdb, FaPlayCircle} from 'react-icons/fa'
import './css/VideoCard.css'
import ReactCardFlip from 'react-card-flip'
import PreviewModal from '../utils/PreviewModal'

const VideoCard = (ref) => {
    const [flipped, setFliped] = useState(false)
    const [visible, setVisible] = useState(false)
    return (
        <>
        <ReactCardFlip isFlipped={!flipped} flipDirection="horizontal">
        <div style={{
            width:250,
            height:435,
            cursor:'pointer'
        }} onClick = {() => setFliped(!flipped)}
        className='videoCard'>
                <h2 style={{color: "#fff"}}>{'Name Of The Movie'}</h2>
                <p>{'Movie description'}</p>
                <span style={{
                    display:"flex",
                    alignItems:'center'
                }}><MdPoll size={"30px"} style={{
                    marginRight: "10px"
                }}/>{'100'}</span>
                <span style={{
                    display:"flex",
                    alignItems:'center',
                    margin:'5px 0px',
                    flex:1
                }}>
                   <FaImdb size={"30px"} style={{
                    marginRight: "10px"
                }}/> 4.8
                </span>
                <span onClick={() => setVisible(true)} style={{
                    display:"flex",
                    alignItems:'center',
                    margin:'50px 0px',
                    flex:1
                }}>
                    {/* play icon  */}
                    <FaPlayCircle color='#16DA8E' size={"60px"} style={{
                        marginRight: "10px"
                }}/>
                    <strong style={{
                        fontsize: "280px",
                        fontWeight: 400,
                        margin: "0px 5px"
                    }}>
                        Watch Now
                    </strong>

                </span>
            </div>
                {/* //  front side */}
                <div style={{
                    width:250,
                    height:435,
                    cursor:'pointer'
                }}  onClick = {() => setFliped(!flipped)}
                className='videoCard'>
                    <img src= {"https://localist-images.azureedge.net/photos/22631/original/df35ca93a5e56059594816f73d7add492e49cf25.jpg "}  alt='poster'/>
                    <h3 style={{
                        color:"#fff",
                        margin:"10px 10px"
                    }}>{" name of the movie"}</h3>
                </div>
        
        </ReactCardFlip>
    
    <PreviewModal 
      visible={visible} 
      setVisible={setVisible}
    />
       
        </>
        

            
    
    )
}

export default VideoCard