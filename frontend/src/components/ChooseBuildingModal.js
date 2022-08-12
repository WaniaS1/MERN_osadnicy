import React from 'react'

export default function ChooseBuildingModal({chooseBuildingMode, buyBuilding, closeBuyBuildingMode, notEnoughResourcesInfo}) {
    
    if(!chooseBuildingMode)
    return (
        <div className='modal hidden'>
            <h3>WYBIERZ BUDOWLĘ</h3>
            <img width ="120px"  src='/image/farm.png' alt = 'building' />
            <img width ="120px" src='/image/castle.png' alt = 'building' />
        </div>
    )
    if(chooseBuildingMode)
    return (
        <div className='modal'>
            <h3>WYBIERZ BUDOWLĘ</h3>
            <img width ="120px" onClick= {() => {buyBuilding('farm')}} src='/image/farm.png' alt = 'building' />
            <img width ="120px" onClick= {() => {buyBuilding('castle')}} src='/image/castle.png' alt = 'building' />
            {notEnoughResourcesInfo ? <p className='notEnoughResourcesInfo'>NIE MASZ TYLE SUROWCÓW</p> : <p className='notEnoughResourcesInfo hidden'>NIE MASZ TYLE SUROWCÓW</p>}
            <button className='btn' onClick={()=>{closeBuyBuildingMode()}}><span className="material-symbols-outlined">
            close
            </span></button>
        </div>
    )
}
