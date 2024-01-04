import './App.css'
import Button from "./components/Button.jsx";

function App() {
  return (
    <>
    <nav>
      <Button type='button' buttonText='to the collection' onClick={() => console.log (`to the collection`)}/>
      <Button type='button' buttonText='shop all bags' onClick={() => console.log (`shop all bags`)}/>
      <Button disabled= {true} type='button' buttonText='pre-orders' onClick={() => console.log (`pre-orders`)}/>
    </nav>
    </>
  )
}

export default App
