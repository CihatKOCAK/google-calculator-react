import { useState } from 'react'
import './history.scss'
import { AiOutlineHistory } from "react-icons/ai";
import HistoryPanel from '../historyPanel/HistoryPanel';

function History() {
  const [historyShow, setHistoryShow] = useState(false);
  return (
    <>
      <div className='historyContainer'>
        <AiOutlineHistory className='historyIco' 
        size={30}
         onClick={() => setHistoryShow(!historyShow)} />
        <div className='operationResult'>
          <span className='noselect'>2+2=</span>
        </div>
      </div>
      <HistoryPanel historyShow={historyShow} setHistoryShow={setHistoryShow} />
    </>
  )
}

export default History
