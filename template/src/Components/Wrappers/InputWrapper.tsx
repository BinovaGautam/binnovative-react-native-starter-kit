import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import Cardwrapper from './Cardwrapper';
import { Colors, MetricsSizes } from '@/Theme/Variables';
import { CText } from '../Common';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
// import ElevatedWrapper from './ElevatedWrapper';

type Props = {
  children: React.ReactNode;
  style?: any;
  label?: string;
  required?: boolean;
  parentStyle?: any;
};

const InputWrapper = ({
  children,
  style,
  label,
  required,
  parentStyle,
}: Props) => {
  const yOffset =useSharedValue(30);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: yOffset.value }],
    };
  });

  useEffect(() => {
    yOffset.value = withTiming(0, { duration: 1000 });
  }, [])
  


  return (
    <View style={[styles.parent, parentStyle]}>
      {label && (
        <Animated.View style={[animatedStyle]} >
          <CText as="pMed">
            {label}
            
          </CText>
        </Animated.View>
      )}
      {/* <Cardwrapper style={style || {}}>{children}</Cardwrapper> */}
      <View style={styles.inputContainer}>{children}</View>
     </View>
  );
};

export default InputWrapper;

const styles = StyleSheet.create({
  parent: {
    marginVertical : MetricsSizes.SMALL,
    overflow: 'hidden',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Jost-Bold',
    lineHeight: 17,
    color: '#000',
    marginBottom: 5,
  },
  active: {
    // position: 'relative',
  },
  required: {
    fontSize: 12,
    color: '#000',
    marginLeft: 10,
    fontWeight: '300',
  },
  inputContainer: {
    height : MetricsSizes.XXLARGE,
    borderRadius: MetricsSizes.SMALL,
    // borderWidth: 1,
    // backgroundColor: Colors.WHITE,
    borderColor: Colors.primary+'44', 
    justifyContent: 'center',
  }
});
