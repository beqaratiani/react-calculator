import { useState, useContext } from 'react'
import { ButtonContext } from '../ButtonContext'

const Button = ({ val }) => {
  const [output, setOutput] = useContext(ButtonContext)
  const handleNum = () => {
    if (val === '=') {
      setOutput(eval(String(output)))
    } else if (val === 'C') {
      setOutput('')
    } else if (val != '%') {
      setOutput(output + String(val))
    }
  }

  return (
    <button className={`button ${val === 0 ? 'zer' : ''}`} onClick={handleNum}>
      {val}
    </button>
  )
}

export default Button
