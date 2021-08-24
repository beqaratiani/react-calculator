import Button from './Button'

const Buttons = () => {
  return (
    <div className='buttons'>
      <div className='row'>
        <Button val={'C'} />
        <Button val={'+/-'} />
        <Button val={'%'} />
        <Button val={'/'} />
      </div>
      <div className='row'>
        <Button val={7} />
        <Button val={8} />
        <Button val={9} />
        <Button val={'*'} />
      </div>
      <div className='row'>
        <Button val={4} />
        <Button val={5} />
        <Button val={6} />
        <Button val={'-'} />
      </div>
      <div className='row'>
        <Button val={1} />
        <Button val={2} />
        <Button val={3} />
        <Button val={'%'} />
      </div>
      <div className='row'>
        <Button val={0} />
        <Button val={'.'} />
        <Button val={'='} />
      </div>
    </div>
  )
}

export default Buttons
