import { FC, useState } from 'react'

interface Props {
  value: number;
}


export const CounterApp: FC<Props> = ({ value }) => {
  const [counter, setCounter] = useState(value)

  const handleAdd = () => {
    setCounter((c) => c + 1);
  }

  const handleSubstract = () => {
    setCounter((c) => c - 1);
  }

  const handleReset = () => {
    setCounter(value);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button aria-label='btn-reset' onClick={handleReset}>Reset</button>
    </>

  )
}