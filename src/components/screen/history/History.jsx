import React from 'react'
import './history.scss'
import { AiOutlineHistory } from "react-icons/ai";

function History() {
  return (
    <div className='historyContainer'>
      <AiOutlineHistory className='historyIco' size={30}/>
      
      <div className='operationResult'>
        <span>2+2=</span>
      </div>
    </div>
  )
}

export default History
