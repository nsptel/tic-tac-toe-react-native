import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'

import styles from '../assets/styles'

export default class Cell extends React.Component {
    constructor() {
        super()
        this.state = {
            iconName: 'border-none-variant',
            iconColor: '#fff',
            checked: false,
        }
    }

    changeColor = () => {
        if (!this.state.checked) {
            this.setState({
                iconName: (this.props.nextPlayer === 1)
                          ? 'circle-outline'
                          : 'close',
                iconColor: (this.props.nextPlayer === 1)
                           ? '#5cff57'
                           : '#ff3838',
                checked: true,
            }, this.props.changePlayerAndGameState(this.props.id))
        }
    }

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        if (nextProps.updateCells) {
            this.setState({
                iconName: 'border-none-variant',
                iconColor: '#fff',
                checked: false,
            }, this.props.toggleUpdateCells)
        }
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.box}
                onPress={this.changeColor}
                disabled={this.state.checked} >
                <Icon name={this.state.iconName} style={{ fontSize: 90, color: this.state.iconColor, fontWeight: 'bold', }}></Icon>
            </TouchableOpacity>
        )
    }
}