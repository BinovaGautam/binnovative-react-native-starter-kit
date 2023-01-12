import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useTheme from '@/Hooks/useTheme'
import { CText } from '.'
import { MetricsSizes } from '@/Theme/Variables'

type Props = {
    text ? : string
}

const {height} = MetricsSizes

const EmptyComponent = ({text}: Props) => {
    const {Layout} = useTheme()
  return (
    <View style={[Layout.fill , Layout.colCenter , Layout.justifyContentCenter,styles.container]} >
       <CText as="h5" style={{textAlign:'center'}}> {text || "No Data Found"} </CText>
    </View>
  )
}

export default EmptyComponent

const styles = StyleSheet.create({
    container :{
        minHeight : height*0.6
    }
})