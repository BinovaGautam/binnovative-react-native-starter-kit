import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
// import { BlurView, BlurViewProps } from '@react-native-community/blur'
import { MetricsSizes } from '@/Theme/Variables'
import GradientCard from './GradientCard'

type Props = {
    children : ReactNode,
    containerStyle?: any,
    
}

const BlurLayout = ({
    children,
    containerStyle,
    ...restProps
}: Props ) => {
  return (
    <>
      {/* <BlurView blurType="light" blurAmount={2} style={[styles.fixed, containerStyle]} {...restProps} overlayColor='transparent' > */}
        <GradientCard style={{flex:1}} >
          {children}
        </GradientCard>
      {/* </BlurView> */}
    </>
  )
}

export default BlurLayout

const styles = StyleSheet.create({
    fixed: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
})