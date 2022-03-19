import React from 'react'
import './style.scss'

function Table(props) {
    return (
        <table>
            <tbody>
                {props.data.map((row, index) => {
                    return (
                        <tr key={index}>
                            {row.map((column) => {
                                return (

                                    column.key2 ? < td colSpan={2} key={column.key} >
                                        <div className={ column.className} > 
                                            <input type="checkbox" />
                                                <span>{column.key}</span>
                                                <span>|</span>
                                                <span>{column.key2}</span>
                                        </div >
                                    </td> :
                                        < td key={column.key} >
                                            {column.subClassName ? < div className={column.className + " " + column.subClassName} > {column.key} </div > :
                                                < div className={column.className} > {column.key} </div >}
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