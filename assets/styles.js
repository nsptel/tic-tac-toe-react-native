import { StyleSheet, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        width: '90%',
        minHeight: Dimensions.get('window').width * 1.5,
        maxHeight: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    outerBox: {
        flex: 1,
        margin: 3,
        marginBottom: 100,
        borderRadius: 5,
        backgroundColor: '#ddd',
        maxHeight: Dimensions.get('window').width * 0.8,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },

    box: {
        flex: 1,
        margin: '1.45%',
        backgroundColor: '#ccc',
        borderRadius: 3,
        minWidth: '30%',
        maxWidth: '30%',
        maxHeight: '30%',
        minHeight: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})