import React from 'react'
import {NavLink} from 'react-router-dom'



function ColorList(props){
let {listedColors} = props
console.log(listedColors)

    return(
        <>
        <h3>Your Colors:</h3>
        <div style={{display:'flex', flexDirection:'column'}}> 
        {listedColors.map((x)=>{
           return <NavLink exact to={`/colors/${x.name.toLowerCase()}`}>{x.name}</NavLink>
        })}
        </div>
        </>
    )
}


export default ColorList