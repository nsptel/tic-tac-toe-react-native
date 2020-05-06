import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'

import GameBoard from './components/GameBoard'

export default class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={styles.container}>
        <GameBoard />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
