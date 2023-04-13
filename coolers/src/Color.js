
import React from 'react'
import { useParams } from 'react-router-dom'
import App from './App'
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function Color(props){
// console.log(useParams())
let {color} = useParams()
// console.log(color)

    return(
        <div >
            {/* color page */}
            <div style={{background:color, height:'500px', width:'500px'}}></div>
        </div>
    )
}


export default Color