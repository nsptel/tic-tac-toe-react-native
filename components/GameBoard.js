import React from 'react'
import { View, Alert, Button } from 'react-native'

import styles from '../assets/styles'
import Cell from './Cell'

export default class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      currentGameState: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      nextPlayer: 1,
      updateCells: false,
    }
  }

  changePlayerAndGameState = (move) => {
    let newGameState = [...this.state.currentGameState]
    newGameState[move] = this.state.nextPlayer

    this.setState({
      currentGameState: newGameState,
      nextPlayer: (this.state.nextPlayer === 1)
                  ? -1
                  : 1
    }, this.checkIfWon)
  }

  toggleUpdateCells = () => {
    this.setState({
      updateCells: !this.state.updateCells,
    })
  }

  checkIfWon = () => {
    let winningConditions = [[0, 1, 2],
                             [3, 4, 5],
                             [6, 7, 8],
                             [0, 3, 6],
                             [1, 4, 7],
                             [2, 5, 8],
                             [0, 4, 8],
                             [2, 4, 6]]

    for (let i=0; i<8; i++) {
      let total = 0
      for (let j=0; j<3; j++) {
        total += this.state.currentGameState[winningConditions[i][j]]
      }
      if (total === 3) {
        Alert.alert('Green-Circle won the game!!')
        this.toggleUpdateCells()
        this.resetBoard()
      } else if (total === -3) {
        Alert.alert('Red-Cross won the game!!')
        this.toggleUpdateCells()
        this.resetBoard()
      }
    }

    setTimeout(this.checkIfFull, 1000)
  }

  checkIfFull = () => {
    if (!this.state.currentGameState.includes(0)) {
      Alert.alert('Match draw! Hit "Start Again" to start a new match!')
    }
  }

  resetBoard = () => {
    this.setState({
      currentGameState: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      nextPlayer: 1,
      updateCells: true,
    })
  }

  render() {
    let cells = []

    for (let i=0; i<9; i++) {
      cells.push({
        style: styles.box,
      })
    }

    cellsView = cells.map((_, index) => (
      <Cell key={index}
            id={index}
            changePlayerAndGameState={this.changePlayerAndGameState.bind(this)}
            toggleUpdateCells={this.toggleUpdateCells.bind(this)}
            nextPlayer={this.state.nextPlayer}
            updateCells={this.state.updateCells} />
    ))

    return (
      <View style={styles.container}>
        <View style={styles.outerBox}>
          {cellsView}
        </View>
        <Button onPress={this.resetBoard} title="Start Again"></Button>
      </View>
    )
  }
}