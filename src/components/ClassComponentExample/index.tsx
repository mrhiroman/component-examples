import React, { Component } from 'react'
import styles from './ClassComponentExample.module.sass'

export class ClassComponentExample extends Component<any> {
  state = {
    button: 'none'
  }

  setButton = (button: string) => {
    this.setState({button: button})
  }

  render() {
    
    const {propText} = this.props
    const {button} = this.state

    return (
      <div className={styles.root}>
        <h2>ClassComponentExample</h2>
        <p>{propText !== undefined ? propText : "sample text"}</p>
        <p>Нажата кнопка {button}</p>
        <div>
            <button onClick={() => this.setButton("1")}>button1</button>
            <button onClick={() => this.setButton("2")}>button2</button>
        </div>
      </div>
    )
  }
}

export default ClassComponentExample