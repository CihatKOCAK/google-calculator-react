import { useState } from 'react'
import './history.scss'
import { AiOutlineHistory } from "react-icons/ai";
import HistoryPanel from '../historyPanel/HistoryPanel';

function History({ historyOperations, setScreen, setActiveOperation }) {
  const [historyShow, setHistoryShow] = useState(false);
  return (
    <>
      <div className='historyContainer'>
        <AiOutlineHistory className='historyIco'
          size={30}
          onClick={() => setHistoryShow(!historyShow)} />
        <div className='operationResult'>
          <span className='noselect'>{
            historyOperations.length > 0 ? historyOperations[historyOperations.length - 1].operation : ''
          }</span>
        </div>
      </div>
      <HistoryPanel historyShow={historyShow}
        setHistoryShow={setHistoryShow}
        historyOperations={historyOperations}
        setScreen={setScreen}
        setActiveOperation={setActiveOperation} />
    </>
  )
}

export default History
