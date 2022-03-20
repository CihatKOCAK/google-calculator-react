import React from 'react'
import Table from '../table';
import { simpleData } from './Data';
import './style.scss'

function SimpleSide() {
  return (
    <div className='containerSimpleSide'>
      <Table data={simpleData.keys} />
    </div>
  )
}

export default SimpleSide;