import { ActivityIndicator, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PopUpWrapper } from '../Wrappers'
import { useTheme } from '@/Hooks'
import { CText } from '.'
import Lottie from 'lottie-react-native'
import { Lottieloader } from '@/Assets/Lottie/lottiefiles'
import { Colors } from '@/Theme/Variables'

type Props = {
    loadingTxt ?: string
}

const FullScreenLoader = ({
    loadingTxt
}: Props) => {
    const {Colors,Layout , Images} = useTheme()
  return (
    <View style={[Layout.fill,styles.overlayContainer]}   >
        <CText as="pmdMed" >{loadingTxt}</CText>
          <ImageBackground source={Images.whiteBlur} style={[styles.overlayContainer,]} />
          <View style={[ Layout.fullHeight,Layout.fullWidth, Layout.justifyContentCenter, styles.container]}>

              <Lottie source={Lottieloader} autoPlay loop />
          </View>
    </View>
  )
}

export default FullScreenLoader

const styles = StyleSheet.create({
    container: {
       
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection : 'row',
    },
    overlayContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})