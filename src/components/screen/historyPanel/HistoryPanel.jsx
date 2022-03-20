import React from 'react'
import './historyPanel.scss'
import { AiOutlineHistory } from "react-icons/ai";

function HistoryPanel({ setHistoryShow, historyShow }) {
  return (
    <>
      {historyShow && <div className="containerHistoryPanel noselect" >
        <AiOutlineHistory key={"panelController"} className='historyIco' size={30} onClick={() => setHistoryShow(!historyShow)} />
        <div className='operationResult'>
          <table>
            <tbody>
              <tr>
                <td>2+687987676872</td>
                <td>=</td>
                <td>2+687987676872</td>
              </tr>
              <tr>
                <td>2+2</td>
                <td>=</td>
                <td>4</td>
              </tr>
              <tr>
                <td>2+2</td>
                <td>=</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>}
    </>
  )
}

export default HistoryPanel