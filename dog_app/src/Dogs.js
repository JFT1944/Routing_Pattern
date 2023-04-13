import React from "react";
import Dog from "./Dog";



function Dogs(props){
let {dogs} = props

console.log(dogs.dogs)

    return(
        <>
    {dogs.dogs.map(x => <Dog name={x.name} facts={x.facts} age={x.age}/>)}
        </>
    )
}


export default Dogs