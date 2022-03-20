import React from 'react'
import Table from '../table';
import './style.scss'
import { scientificData } from './Data'

function ScientificSide() {
  return (
    <div className='containerScientificSide'>
     <Table data={scientificData.keys}/>
    </div>
  )
}

export default ScientificSide;