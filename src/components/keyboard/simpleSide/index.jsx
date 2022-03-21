import React from 'react'
import Table from '../table';
import { simpleData } from './Data';
import './style.scss'

function SimpleSide({ screen, setScreen, setHistoryOperations, historyOperations, activeOperation, setActiveOperation }) {
  return (
    <div className='containerSimpleSide'>
      <Table screen={screen}
        setScreen={setScreen}
        data={simpleData.keys}
        setHistoryOperations={setHistoryOperations}
        side="simple" historyOperations={historyOperations}
        activeOperation={activeOperation}
        setActiveOperation={setActiveOperation} />
    </div>
  )
}

export default SimpleSide;