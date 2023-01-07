import { Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Colors, MetricsSizes } from '@/Theme/Variables'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { CText } from '../Common'

const {width,height , small ,regular ,tiny} = MetricsSizes

type Props = {
    children ?: React.ReactNode,
    style ?: any,
    height ?: number,
    onBackPress ?: () => void,
    backColor ?: string,
    headerTitle ?: string,
    statusBarColor ?: string,
}

//,height && {height : height}

const LayoutDefault = ({children, style,height,onBackPress,backColor,headerTitle , statusBarColor}: Props) => {
  const scale = useSharedValue(1)

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [{
        scale: withTiming(scale.value, {duration: 500})
      }]
    };
  });

  useEffect(() => {
    // scale.value = withTiming(1, {duration: 1500});
  }, []);
  return (
    <Animated.View style={[styles.container, style,animationStyle]}>
      <StatusBar backgroundColor={statusBarColor ||  Colors.primary} barStyle="dark-content" />
      <View style={styles.inRow}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress} style={styles.touchableIcon}>
          <Ionicons name="chevron-back" size={30} color={backColor || Colors.white} />
        </TouchableOpacity>
      )}
       {
          headerTitle && 
            <CText as="h4" style={{color: backColor || Colors.white, marginLeft : regular}} >{headerTitle}</CText>
       }

      </View>
      {children}
    </Animated.View>
  );
}

export default LayoutDefault

const styles = StyleSheet.create({
  container: {
    backgroundColor:  Colors.primaryBg ,
    flex: 1,
  },
  bgContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bgRect: {
    height: 200,
    width: '100%',
    backgroundColor: Colors.primary,
  },
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: width,
    borderTopWidth: 100,
    borderRightColor: 'transparent',
    borderTopColor: Colors.primary,
  },
    touchableIcon : {
      
        padding: 10,
        zIndex : 1,
    },
    inRow : {
        flexDirection : 'row',
        alignItems : 'center',
    }
});