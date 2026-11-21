
import './App.css'
// creating component

function Title() {
  return <h1>Hi, I am the Title!</h1>
}

function Description() {
  return <h3>I am the description !</h3>
}

// to render in app component we use either write this -> <Title></Title> or <Title/>
function App() {

  return (
  <div>
    <Title/>
    <Description/>
    <Title/>
    <Description/>
    <Title/>
    <Description/>
  </div>
  )
    
}

export default App
