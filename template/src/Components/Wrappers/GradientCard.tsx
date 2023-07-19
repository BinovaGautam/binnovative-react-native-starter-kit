import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Colors, MetricsSizes } from '@/Theme/Variables'
import { useTheme } from '@/Hooks'
import { GradientCardProps } from '@/Types'


const GradientCard = ({
    children,
    style,
    gradientColors = [Colors.PRIMARY , Colors.PINKISH_RED ],
    borderWidth = 1,
    opacity = 50,
}: GradientCardProps) => {
  const  {Layout , Colors} = useTheme()
  
  const colorSet = useMemo(() =>{
        if(opacity >= 100) return gradientColors;
        let opacitystring = opacity.toString()  
        return  gradientColors.map((color:string) => color + opacitystring)  
        
    },[gradientColors,opacity  ]) 

  return (
      <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={colorSet}
          style={[styles.gradient,style,borderWidth && {borderWidth}]}>
            
                {children}
             

      </LinearGradient>
  )
}

export default GradientCard

const styles = StyleSheet.create({
    gradient: {
        // flex: 1,
        padding : MetricsSizes.SMALL,
        borderRadius : MetricsSizes.TINY,
        borderColor : Colors.LIGHT_GRAY,
    },
})