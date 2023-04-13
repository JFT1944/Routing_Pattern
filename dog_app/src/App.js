// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink, Route, useParams, Switch} from 'react-router-dom'
import Dogs from './Dogs';
import Dog from './Dog';


function App(props) {
  
// console.log(name)
// let {name} = useParams()
// let chosenDog = props.dogs.filter(x => x.name === name)
// console.log(chosenDog)

  return (

    <div className="App">
     
<BrowserRouter>
<nav>
    <NavLink exact to="/dogs">Home</NavLink>
    {/* <NavLink exact to='/dogs/:name'></NavLink> */}
<Switch>
    <Route exact path='/dogs'>
      <Dogs dogs={props}/>
    </Route>
    
    <Route exact path='/dogs/:fname'>
      <Dog info={props}/>
    </Route>
    </Switch>

</nav>








</BrowserRouter>










    </div>
  );
}


App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: 'whiskey',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: 'duke',
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: 'perry',
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: 'tubby',
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
