import React from 'react'

function Copied({color}) {
  
  return (
    <div className='copied'>Copied <b>{color}</b> to clipboard</div>
  )
}

export default React.memo(Copied)