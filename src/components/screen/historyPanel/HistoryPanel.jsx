import React from 'react'
import './historyPanel.scss'
import { AiOutlineHistory } from "react-icons/ai";

function HistoryPanel({ setHistoryShow, historyShow, historyOperations }) {
  return (
    <>
      {historyShow && <div className="containerHistoryPanel noselect" >
        <AiOutlineHistory key={"panelController"} className='historyIco' size={30} onClick={() => setHistoryShow(!historyShow)} />
        <div className='operationResult'>
          <table>
            <tbody>
              {historyOperations.length > 0 ? historyOperations.map((operation, index) => {
                return (
                  <tr key={index}>
                    <td>{operation.operation}</td>
                    <td>=</td>
                    <td>{operation.result}</td>
                  </tr>
                )
              }) :
                <tr>
                  <td>You have no history</td>
                </tr>}
            </tbody>
          </table>
        </div>
      </div>}
    </>
  )
}

export default HistoryPanel