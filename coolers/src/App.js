// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Switch, Redirect } from "react-router-dom"
import Color from './Color';
import ColorForm from './ColorForm';
import ColorList from './ColorList';


function App() {
  const [color1, setColor1] = useState([{name:'Yellow', hex:'FFFF00' }, {name:'Orange', hex:'FFA500'}])

  function addToColorList(newColor){
    console.log(newColor)
    setColor1((oldColor)=>{
      oldColor.push(newColor)

      return [...oldColor]
    })
    console.log(color1)
  }


  return (

    <div className="App">
      {/* <ColorForm /> */}
    
    <BrowserRouter>
    <nav style={{display:'flex', 'flexDirection': 'column'}}>
    <NavLink exact to='/colors'>HOME</NavLink>
    <NavLink exact to='/colors/new'>Add A Color</NavLink>
    </nav>
    

<Switch>
    <Route exact path="/colors"><ColorList listedColors={color1}/></Route>

    <Route exact path='/colors/new'> <ColorForm addingColor={addToColorList}/></Route>
    
    <Route exact path='/colors/:color'><Color /></Route>

    <Redirect to='/colors'/>
    
    
    </Switch>
    </BrowserRouter>

    </div>
  );
}

export default App;
