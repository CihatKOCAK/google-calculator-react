import React, { useState } from 'react'
import controllerCalculate from '../../../controllerCalculate';
import './style.scss'

function Table(props) {

    const { screen, setScreen, data, side, setHistoryOperations, historyOperations, activeOperation, setActiveOperation } = props;
    const handleClick = (e) => {
        if (side === "simple") {
            controllerCalculate(e, screen, setScreen, setHistoryOperations, historyOperations, activeOperation, setActiveOperation);
        }
        else {
            alert('scientific calculator disabled')
        }
    }
    return (
        <table className='noselect'>
            <tbody>
                {data.map((row, index) => {
                    return (
                        <tr key={index}>
                            {row.map((column) => {
                                return (

                                    column.key2 ? < td colSpan={2} key={column.key} >
                                        <div className={column.className} onClick={() => handleClick(column.value)}>
                                            {/* <input type="checkbox" /> */}
                                            <span className='active'>{column.key}</span>
                                            <span>|</span>
                                            <span>{column.key2}</span>

                                        </div >
                                    </td> :
                                        < td key={column.key} >
                                            {column.subClassName ? < div className={column.className + " " + column.subClassName} onClick={() => handleClick(column.value)}> {column.key} </div > :
                                                < div className={column.className} onClick={() => handleClick(column.value)}> {column.key} </div >}
                                        </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody >
        </table >
    )
}

export default Table;