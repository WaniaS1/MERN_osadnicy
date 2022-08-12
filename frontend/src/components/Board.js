import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/dataContext'
import BoardRow from './BoardRow'
import Build from './Build'
import Buildings from './Buildings'


export default function Board({resources, updateResources}) {
    const {data, dispatch} = useContext(DataContext)
    const [board, setBoard] = useState([])
    const [buyBuildingMode, setBuyBuildingMode] = useState(false)
    const [chooseBuildingMode, setChooseBuildingMode] = useState(false)
    const [newBuildingPosition, setNewBuildingPosition] = useState(null)
    const [notEnoughResourcesInfo, setNotEnoughResourcesInfo] = useState(false)
    const [buildings, setBuildings] = useState([
        {
            type: 'farm',
            left: 2,
            top: 0
        },
        {},
        {
            type: 'farm',
            left: 6,
            top: 0
        },{},{},{},{},
        {
            type: 'farm',
            left: 6,
            top: 5
        },
        {
            type: 'castle',
            left: 8,
            top: 5
        },{},{},{}
    ])

    useEffect(() => {
        shuffleBoard()
    },[])
    
    const shuffleBoard = () => {
        console.log('working')
        setBoard(prev => {
            const numberArray = [...Array(19)].map((item, i) => item = i)
            const sortedArray = numberArray.sort(() => Math.random() - 0.5)
            let j = -1
            const schema = [
                [...Array(3)].map((item, i) => {
                    j++
                    return item = sortedArray[j]
                }),
                [...Array(4)].map((item, i) => {
                    j++
                    return item = sortedArray[j]
                }),
                [...Array(5)].map((item, i) => {
                    j++
                    return item = sortedArray[j]
                }),
                [...Array(4)].map((item, i) => {
                    j++
                    return item = sortedArray[j]
                }),
                [...Array(3)].map((item, i) => {
                    j++
                    return item = sortedArray[j]
                })
            ]
            return schema
        })
    }

   

//write some modal with question "What do you want to buy, and add functionality to buyBuilding which check if you have resources, and it will both dispatch an action and send a patch request to db"

    const openBuyBuildingMode = () => {
        setBuyBuildingMode(true)
    }
    const closeBuyBuildingMode =() => {
        setBuyBuildingMode(false)
        setChooseBuildingMode(false)
        setNotEnoughResourcesInfo(false)
    }
    const chooseBuildingPlace = (rowNr, colNr) => {
        setChooseBuildingMode(true)
        setNewBuildingPosition({
            left: colNr,
            top: rowNr
        })
    }
    const buyBuilding = (type) => {
        console.log(type, checkResources(type))
        if(checkResources(type))
        {
            setBuildings(prev => [...prev, 
                {
                    type: type,
                    left: newBuildingPosition.left,
                    top: newBuildingPosition.top
                }])
                updateResources(type) //update state

                setBuyBuildingMode(false)
                setChooseBuildingMode(false)
        }else{
            setNotEnoughResourcesInfo(true)
        }
        
    }
    const checkResources = (type) => {
        if(type === 'farm'){
            for(let i = 0; i < 4; i++){
                if(resources[i].quantity < 1) return false
            }
            return true
        }
        if(type === 'castle'){
            if(resources[2].quantity < 2 || resources[4].quantity < 3) return false
            return true
        }
    }
    
  return (
    <div className='board'>
        <Build buyBuildingMode = {buyBuildingMode} chooseBuildingMode = {chooseBuildingMode} chooseBuildingPlace={chooseBuildingPlace} buyBuilding = {buyBuilding} closeBuyBuildingMode={closeBuyBuildingMode} notEnoughResourcesInfo={notEnoughResourcesInfo}/>
        <button className='btn' onClick = {openBuyBuildingMode}>BUDUJ</button>
            {buildings && buildings.map((buil, i) => <Buildings key={i} buil={buil} chooseBuildingMode={chooseBuildingMode}/>)}
            {board && board.map((row, i) => { 
            return (
                    <BoardRow  key = {i} row = {row} rowNr = {i}/> 
            )
            
        })}
    </div>
  )
}
    