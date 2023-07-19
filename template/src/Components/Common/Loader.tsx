import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import Lottie from 'lottie-react-native'
import { Lottieloader } from '@/Assets/Lottie/lottiefiles'
import { MetricsSizes } from '@/Theme/Variables'

type Props = {}

const Loader = (props: Props) => {
    const { Colors, Layout , MetricsSizes } = useTheme()
  return (
      <View style={[ Layout.justifyContentCenter, styles.container]}>

          <Lottie source={Lottieloader} autoPlay loop />
      </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height : MetricsSizes.BASE100,
    }
})