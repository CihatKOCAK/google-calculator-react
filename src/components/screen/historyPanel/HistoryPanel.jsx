import React from 'react'
import './historyPanel.scss'
import { AiOutlineHistory } from "react-icons/ai";

function HistoryPanel({ setHistoryShow, historyShow, historyOperations, setScreen,  setActiveOperation }) {
  const setScreenVal = (screen) => {
    setHistoryShow(false);
    setActiveOperation(true);
    setScreen(screen);
  }
  return (
    <>
      {historyShow && <div className="containerHistoryPanel noselect" >
        <AiOutlineHistory key={"panelController"} className='historyIco' size={30} onClick={() => setHistoryShow(!historyShow)} />
        <div className='operationResult'>
          <table>
            <tbody>
              {historyOperations.length > 0 ? historyOperations.map((item, index) => {
                return (
                  <tr key={index}>
                    <td onClick={() => setScreenVal(item.operation)}>{item.operation.length < 7 ? item.operation : item.operation.substr(0, 6) + "..."}</td>
                    <td>=</td>
                    <td onClick={() => setScreenVal(item.result)}>{item.result.length < 7 ? item.result : item.result.substr(0, 6) + "..."}</td>
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