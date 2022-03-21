import React from 'react'
import './result.scss'
function Result({ screen }) {

  return (
    <div className='resultContainer'><span>
      {screen ? screen : '0'}
    </span></div>
  )
}

export default Result