
import './App.css'
import Title from './Title'
// import ProductTab from './Product'
import ProductTab from './ProductTab'
import MsgBox from './MsgBox'


function App() {
  return (
  <>
    <MsgBox userName = "Vivek" textColor = "blue" ></MsgBox>
     <MsgBox userName = "Sahil" textColor = "pink" ></MsgBox>
      <MsgBox userName = "Pankaj" textColor = "orange" ></MsgBox>
   <ProductTab></ProductTab>
   
  </>
 
  )
    
}

export default App;
