
import './App.css'
// import Title from './Title'
import {Title,Navbar} from "./Title.jsx" // named import


function Description() {
  return <h3>I am the description !</h3>
}

function App() {

  return (
  <div>
    <Title/>
    <Description/>
    <Title/>
    <Description/>
    <Title/>
    <Navbar></Navbar>
  </div>
  )
    
}

export default App
