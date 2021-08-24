import { useContext } from 'react'
import { ButtonContext } from '../ButtonContext'

const Output = () => {
  const [output] = useContext(ButtonContext)
  return <div className='output'>{output}</div>
}

export default Output
