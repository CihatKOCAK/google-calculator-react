import React from 'react'
import Table from '../table';
import './style.scss'
import { scientificData } from './Data'

function ScientificSide() {
  console.log(scientificData.keys)
  return (
    <div className='containerScientificSide'>
     <Table data={scientificData.keys}/>
    </div>
  )
}

export default ScientificSide;