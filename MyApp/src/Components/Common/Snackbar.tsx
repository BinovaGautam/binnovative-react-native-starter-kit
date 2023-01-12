import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Snackbar = (props: Props) => {
  return (
    <View style={styles.container}>
        <Text>Snackbar</Text>
    </View>
  )
}

export default Snackbar

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})