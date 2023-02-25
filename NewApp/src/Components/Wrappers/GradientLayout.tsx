import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import LayoutDefault from './LayoutDefault'
// import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from '@/Hooks'
import Ionicons from 'react-native-vector-icons/Ionicons'

type Props = {
    children ?: React.ReactNode,
    style ?: any,
    colors ?: string[],
    start ?: any,
    end ?: any,
    onBackPress ?: () => void,

}

const GradientLayout = ({children,style,colors,onBackPress}: Props) => {
    let {Colors} = useTheme()
    let {primary,} = Colors

    let gradientColors =colors ||  [primary, primary + '90'];
  return (
    <LayoutDefault>
      {/* <LinearGradient
        // start={{x: 4, y: 4}}
        end={{x: 1, y: -4}}
        colors={gradientColors}
        style={[styles.gradient, style]}>
            {
                onBackPress && 
                <TouchableOpacity onPress={onBackPress} style={styles.touchableIcon} >
                    <Ionicons name="chevron-back" size={30} color={Colors.white} />
                </TouchableOpacity>
            }
        {children}
      </LinearGradient> */}
    </LayoutDefault>
  );
}

export default GradientLayout

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        
    },
    text: {
        fontSize: 30,
        color: '#fff'
    },
    touchableIcon : {
      
        padding: 10,
        zIndex : 1,
    }
})
