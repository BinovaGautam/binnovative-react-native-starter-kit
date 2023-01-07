import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { Colors } from '@/Theme/Variables'

type Props = {
    children ?: (string | Element)[] | string | string[],
    style ? : any,
    as ?: string,
    size ?: number,
    color ?: string,
    align ?: "left" | "right" | "center" | "justify" | "auto",
}

const TextComp = ({children,as,style,size,color,align}: Props) => {
    const {Fonts} = useTheme()
    as = as || 'p'
  return (
   <Text style={[Fonts?.[as],{color : color || Colors.font},size && {fontSize : size},align && {textAlign : align} ,style]} >
    {children}
   </Text>
  )
}

export default TextComp

const styles = StyleSheet.create({
    text : {
        fontFamily : 'Jost-Black',
        fontSize : 16,
    }
})