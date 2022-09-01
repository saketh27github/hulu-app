import { Modal, Tooltip } from 'antd'
import React from 'react'
import ReactPlayer from 'react-player'
import { MdPoll} from 'react-icons/md'
import {FaImdb} from 'react-icons/fa'
import './PreviewModal.css'


const PreviewModal = ({visible, setVisible}) => {
  return (
    
  <Modal
         centered
         visible={visible}
         onCancel={() => setVisible(false)}
         onOk={() => setVisible(false)}
         width={1060}
         footer={null}
         destroyOnClose
   >

     <div className='modal-container'>
        <div className='modal-container-left'>
           <ReactPlayer 
                height={400}
                width="100%"
                light={"https://localist-images.azureedge.net/photos/22631/original/df35ca93a5e56059594816f73d7add492e49cf25.jpg"}
                url={"https://youtu.be/W4DlMggBPvc"}
                controls={true}
                pip={true}
           />
           <ReactPlayer
           height={400}
           width="100%"
           light={"https://flxt.tmsimg.com/assets/p9991602_p_v12_aj.jpg"}
           url={""}
           controls={true}
           pip={true}
           
           
           />
        </div>

        <div 
        
           className='modal-container-right'>
            <h2 style={{
                    color:"#fff",
                    margin: "10px 0px",
                    fontWeight:"500"
                }}
            >{"Name Of The Movie"}</h2>
            <span><small>{"Movie Tag Line"}</small></span>
            <p>{"Movie Overview"}</p>
            <p>Run Time : {"Movie Run Time"} Mins</p>
            <p>Genre : {" "}
                <span>{"Genre Name"}</span>
            </p>
            <span
                    style={{
                         display: "flex",
                         alignItems: "center"

                    }}
            >
                <MdPoll   size={30} style={{
                        marginRight:"10px"

                }}/> {"Vote Count"} | {"Release Date"}
            </span>
        
        <span  style={{
                         display: "flex",
                         alignItems: "center"

                    }}
        >

                 <FaImdb  size={30} style={{
                        marginRight:"10px"

                }}/> {"Vote Average"}
        </span>
        <span   
                 style={{
                       margin: "10px 0px"

                    }}
        
        
        >
            Production Houses : { " "}
            <Tooltip 
              title={"name of production"}
              placement={"top"}
              >
                <img 
                src= {""} 
                alt="logo" 
                height={30}
                width={100}
                
                />
            </Tooltip>
        </span>
        </div>
     </div>

  </Modal>

  )
}

export default PreviewModal