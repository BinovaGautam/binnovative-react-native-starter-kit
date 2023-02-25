import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '@/Theme/Variables';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

type Props = {
    percentage ?: number,
    indicatorColor ?: string,
    progressColor ?: string,
}

const ProgressBar = ({percentage,progressColor,indicatorColor}: Props) => {
   let width = useSharedValue(0)

   let animatedStyle = useAnimatedStyle(() => {
      return {
        width: withSpring(width.value+'%',{damping:10}),
      };
   });

   useEffect(() => {
        width.value = percentage || 2;
     }, [percentage]);
   

  return (
    <View style={styles.container}>
       <View style={[styles.progress,progressColor && {backgroundColor: progressColor,} ]}>
            <Animated.View style={[styles.progressInner,indicatorColor && {backgroundColor: indicatorColor,},animatedStyle]} />
       </View>
    </View>
  );
}

export default ProgressBar

const styles = StyleSheet.create({
    container : {
         height : 30,
        width : '100%',
        justifyContent: 'center',
    },
    progress : {
        height : 14,
        width : '100%',
        backgroundColor : '#fff',
        borderRadius : 7,
        overflow : 'hidden'
    },
    progressInner : {
        height : '100%',
        width : '0%',
        backgroundColor : Colors.golden,
        borderRadius : 7,
    }
})