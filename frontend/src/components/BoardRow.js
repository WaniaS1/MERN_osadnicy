import React from 'react'

export default function BoardRow({row, rowNr}) {
    
  return (
    <div className='boardRow'>
      {row.map((item, i) => 
        <div rownr ={rowNr} colnr = {i} key={i}><img width = '100px' src ={`/image/r${item % 5}.png`} alt ='resource' nr = {item}/></div>         
      )}
    </div>
    
  )
  
}
