import React from "react";
import {NavLink, useParams} from 'react-router-dom'


function Dog(props){
    let {fname} = useParams()
console.log(fname)
// console.log({name, age, facts})
let {name, age, facts} = props

if(fname){
    console.log('fname')
    let chosenDog = props.info.dogs.filter(x => x.name === fname)
    let {name, age, facts} = chosenDog[0]
    console.log(chosenDog)
    
    console.log(name, age, facts)

    return(
        <>
        <h1>{name}</h1>
        <h3>{age}</h3>
        <ul>
        {facts.map(x => <li>{x}</li>)}
        </ul>
        </>
    )
    
}
console.log(fname)

// console.log(fname)

    return(
        <>
        <NavLink exact to={`dogs/${name}`}><h1>{name}</h1></NavLink>
        <h3>{age}</h3>
        <ul>
        {facts.map(x => <li>{x}</li>)}
        </ul>
        </>
    )
}


export default Dog