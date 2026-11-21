
import './App.css'
// import Title from './Title'
import {Title,Navbar} from "./Title.jsx" // named import


function Description() {
  return <h3>I am the description !</h3>
}

function App() {

  // using div for grouping element it's creating extra node , that why we use react fragment <> </>
  return (
  // <div className='main'>
  <>
    <Title/>
    <Description/>
    <Title/>
    <Description/>
    <Title/>
    <Navbar></Navbar>
  </>
  // </div>
  )
    
}

export default App
