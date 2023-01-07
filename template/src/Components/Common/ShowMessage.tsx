import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PrimaryButton } from '../Buttons'

type Props = {
    title?: string
    subText?: string
    onPress?: () => void,
    btnText?: string,
    containerStyle?: any,
    btnStyle?: any,

}

const ShowMessage = ({
    title,
    subText,
    onPress,
    btnText,
    containerStyle,
    btnStyle
}: Props) => {
  return (
     <View style={[styles.container, containerStyle]}>
        <Text>{title || "Well Done!"} </Text>
        <Text>{subText || "Small Steps Make Big Differences.\nKeep Going On."} </Text>
        <PrimaryButton onPress={onPress} style={[btnStyle]} title={btnText || "Go ON"} />
    </View>
  )
}

export default ShowMessage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})