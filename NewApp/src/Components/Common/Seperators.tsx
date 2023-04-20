import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, MetricsSizes } from '@/Theme/Variables'

type Props = {}
const { SMALL, REGULAR, TINY, LARGE } = MetricsSizes

const Seperators = (props: Props) => {
    return (
        <View>
            <Text>Seperators</Text>
        </View>
    )
}

export const Vr = ({ style }: any) => {
    return (
        <View style={[styles.Vr, style]} />
    )
}

export const Hr = ({ style , color = Colors.GRAY }: any) => {
    return (
        <View style={[styles.Hr, style,color && {backgroundColor: color,}]} />
    )
}

export const VGap = ({ style, gap }: any) => {
    return (
        <View style={[styles.Gap, style, gap && { height: gap }]} />
    )
}

export const HGap = ({ style }: any) => {
    return (
        <View style={[styles.HGap, style]} />
    )
}

export default Seperators

const styles = StyleSheet.create({
    Vr: {
        width: 0.5,
        backgroundColor: '#ccc',
        marginHorizontal: 10,
    },
    Hr: {
        height: 0.5,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    Gap: {
        height: REGULAR,
    },
    HGap: {
        width: SMALL,
    }
})