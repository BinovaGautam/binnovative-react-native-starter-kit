import {Dimensions, ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import Cardwrapper from './Cardwrapper';
import { Colors, MetricsSizes } from '@/Theme/Variables';
import DefaultCard from './DefaultCard';
import { useTheme } from '@/Hooks';
import BlurWrapper from './BlurWrapper';
import { CText } from  '@/Components'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

type Props = {
  children: React.ReactNode;
  onClose?: () => void;
  show: boolean;
  style?: any;
  cardVariant?: 'normal' | 'panel' | 'blank';
};

const PopupWrapper = ({onClose, children, show, style,cardVariant = 'normal'}: Props) => {
  const {MetricsSizes,Layout,Images} = useTheme();
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000 });
  }, [])

  
  return (
    <>
      {show && (
         <View style={styles.overlay}>
                
                  <ImageBackground source={Images.whiteBlur} style={[styles.overlayContainer,styles.blurContainer]}>
                    <Pressable onPress={onClose} style={[styles.overlayContainer]} />
                    
                    <Cardwrapper variant={cardVariant}
                      style={[styles.container,  style ]}>
                        <Animated.View style={[animatedStyle]} >
                        {children}
                        </Animated.View>
                    </Cardwrapper>

                  </ImageBackground>
               
         </View>
      )}
    </>
  );
};

export default PopupWrapper;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom : 0,
    right : 0,
    // backgroundColor: Colors.BRAND_COLOR ,
  },
  blurContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayContainer:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom : 0,
    right : 0,
  },
  container: {
    width: '90%',
    justifyContent: 'center',
    // minHeight: height / 6,
    maxHeight: height / 3,
    overflow: 'scroll',
    borderRadius: MetricsSizes.MEDIUM ,
    borderWidth: 2,
    borderColor: Colors.LIGHT_GRAY,
    backgroundColor:"#00000020",

  },
  alertCard : {
    backgroundColor: Colors.BRAND_COLOR,
  }
});
