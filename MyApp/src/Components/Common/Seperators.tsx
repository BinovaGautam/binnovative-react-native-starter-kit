import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Seperators = (props: Props) => {
  return (
    <View>
      <Text>Seperators</Text>
    </View>
  )
}

export const Vr = ({style} : any) => {
    return (
        <View style={[styles.Vr,style]} />
    )
}

export const Hr = ({style} : any) => {
    return (
        <View style={[styles.Hr,style]} />
    )
}

export const VGap = ({style} : any) => {
    return (
        <View style={[styles.Gap,style]} />
    )
}

export const HGap = ({style} : any) => {
    return (
        <View style={[styles.HGap,style]} />
    )
}

export default Seperators

const styles = StyleSheet.create({
    Vr : {
        width : 0.5,
        backgroundColor : '#ccc',
        marginHorizontal : 10,
    },
    Hr : {
        height : 0.5,
        backgroundColor : '#ccc',
        marginVertical : 10,
    },
    Gap : {
        height : 10,
    },
    HGap : {
        width : 10,
    }
})