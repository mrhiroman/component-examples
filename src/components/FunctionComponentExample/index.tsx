import React, {useState} from 'react'
import styles from './FunctionComponentExample.module.sass'

const FunctionComponentExample = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className={styles.root}>
        <h1>FunctionComponentExample</h1>
        <div className={styles.button} onClick={() => setCounter(counter + 1)}>Click me</div>
        <span>{counter}</span>
    </div>
  )
}

export default FunctionComponentExample