import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    icon : any,
    size ?: number,
    style ?: any,
}

const ICON_DIM = 24

const ImgIcon = ({icon,size , style}: Props) => {
  return (
    <View style={styles.container} >
       <Image source={icon} style={[styles.img,size && {height:size , width : size} , style && style]} />
    </View>
  )
}

export default ImgIcon

const styles = StyleSheet.create({
    container: {
        padding :5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img : {
        height: ICON_DIM,
        width: ICON_DIM,  
    }
})