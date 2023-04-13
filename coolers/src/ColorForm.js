import React, { useState } from 'react'
import {Redirect} from 'react-router-dom'



function ColorForm(props){
let {addingColor} = props
console.log(addingColor)
const [oldColorName, newColorName] = useState('')
const [oldColor, newColor] = useState('#000000')
const [colorAdded, SetColorAdded] = useState(false)
function updateTheColorName(evt){
newColorName(evt.target.value)
}

function updateTheColor(evt){
    newColor(evt.target.value)
}
function listingTheColor(e){
    e.preventDefault()
    console.log('clicked')
    SetColorAdded(true)
    addingColor({name:oldColorName, hex:oldColor})
    
}
    if(colorAdded){
        return <Redirect exact to='/' />
    } else{

    return(
        <div>
            <form>
            <h1>Form</h1>
            <input type='text' placeholder='Color Name' value={oldColorName} onChange={evt=>updateTheColorName(evt)}/>
            <input type='color' value={oldColor} onChange={evt => updateTheColor(evt)}/>
            <input type='submit' onClick={(e) => listingTheColor(e)}/>
                    </form>
        </div>
    )}
}


export default ColorForm