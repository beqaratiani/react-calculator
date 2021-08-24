import React, { useState, createContext } from 'react'

export const ButtonContext = createContext()

export const ButtonProvider = (props) => {
  const [output, setOutput] = useState('')
  return (
    <ButtonContext.Provider value={[output, setOutput]}>
      {props.children}
    </ButtonContext.Provider>
  )
}
