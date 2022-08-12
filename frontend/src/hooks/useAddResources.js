import React from 'react'

function useAddResources() {

    const useAddResources = (tile, buildings, resources) => {
        let updatedResources = [...resources]
        buildings.forEach(building => {

            if((building.top === tile.top || building.top === tile.top + 1) && (building.left))
            //we have match, check which resource needs to be updated
            resources.forEach(resource => {
                if(tile.name === resource.name){
                    updatedResources[resource.nr] = {...updatedResources[resource.nr], quantity: updatedResources[resource.nr].quantity + 1}
                }
            })
        });
        return updatedResources
    }
    
    const randomTile = Math.floor(Math.random() * 19)
        
    return
}

export default useLogic
//0 1, 0 2,

