import './CSS/App.css'
import Output from './components/Output'
import Buttons from './components/Buttons'
import { ButtonProvider } from './ButtonContext'

function App() {
  return (
    <ButtonProvider>
      <div className='App'>
        <Output />
        <Buttons />
      </div>
    </ButtonProvider>
  )
}

export default App
