import React, { useState } from 'react'

let rowSkew = 0;
const topCss = -40
export default function Buildings({buil, chooseBuildingMode}) {
    if(!chooseBuildingMode){
        if(buil.type){
            return (
                <>
                    <div className ='bul'
                        style = 
                        {{
                            left: `${30 + buil.left * 57}px`,
                            top: -30 + buil.top * 95 + 'px'
                        }}
                    >
                        <img width ="70px" src={`/image/${buil.type}.png`} alt = 'building' />
                    </div>
    
                </>
        )}
        else{   
            return (
                <>
                    <div className ='bul'
                        style = {{left: `${80 * buil.left}px`}}
                    >
                        
                    </div>
    
                </>
            )}
    } else{
        if(buil.type){
            return (
                <>
                    <div className ='bul hidden'
                        style = 
                        {{
                            left: `${30 + buil.left * 57}px`,
                            top: -30 + buil.top * 95 + 'px'
                        }}
                    >
                        <img width ="70px" src={`/image/${buil.type}.png`} alt = 'building' />
                    </div>
    
                </>
        )}
        else{   
            return (
                <>
                    <div className ='bul hidden'
                        style = {{left: `${80 * buil.left}px`}}
                    >
                        
                    </div>
    
                </>
            )}
    }
    

}
