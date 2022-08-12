import React from 'react'
import ChooseBuildingModal from './ChooseBuildingModal'

export default function Build({buyBuilding, buyBuildingMode, chooseBuildingMode, chooseBuildingPlace, closeBuyBuildingMode, notEnoughResourcesInfo}) {



  if(!buyBuildingMode){
  return (   
    <>
      <div className='grid hidden'>
          {[...Array(66)].map((item, i) => {
            const rowNr = Math.floor(i / 11)
            const colNr = i % 11

            return (
              <div key = {i} onClick={() => {
                chooseBuildingPlace(rowNr, colNr)
                }}>
              </div>
            )
          })}
      </div>
      <ChooseBuildingModal closeBuyBuildingMode={closeBuyBuildingMode} buyBuilding ={buyBuilding} chooseBuildingMode={chooseBuildingMode} notEnoughResourcesInfo={notEnoughResourcesInfo}/>
    </>
  )}else{
    return (
      <>
        <div className='grid'>
            {[...Array(66)].map((item, i) => {
              const rowNr = Math.floor(i / 11)
              const colNr = i % 11
              
              return (
                <div className='gridItem' key = {i} onClick={() => {
                  chooseBuildingPlace(rowNr, colNr)
                  }}>
                </div>
              )
            })}
            <h3>WYBIERZ MIEJSCE</h3>
        </div>
        <ChooseBuildingModal closeBuyBuildingMode ={closeBuyBuildingMode} buyBuilding ={buyBuilding} chooseBuildingMode={chooseBuildingMode} notEnoughResourcesInfo={notEnoughResourcesInfo}/>
      </>
    )
  }
}

