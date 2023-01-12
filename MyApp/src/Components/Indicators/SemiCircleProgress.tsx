import { useTheme } from '@/Hooks';
import React, {FC, useEffect} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';

type CircularProgressProps = {
  strokeWidth: number;
  radius: number;
  backgroundColor: string;
  percentageComplete: number;
  percentageThreshold   ?: number;
  children?: React.ReactNode;
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgress: FC<CircularProgressProps> = ({
  radius,
  strokeWidth,
  backgroundColor,
  percentageComplete,
  children,
  percentageThreshold,
}) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumfrence = 2 * Math.PI * innerRadius;

  const invertedCompletion = (100 - percentageComplete) / 100;
  const invertedThreshold = (100 - (percentageThreshold || 0)) / 100;

  const theta = useSharedValue(2 * Math.PI);
  const animateTo = useDerivedValue(() => 2 * Math.PI * invertedCompletion);
  const animateThreshold = useDerivedValue(() => 2 * Math.PI * invertedThreshold);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: withTiming(animateTo.value * innerRadius, {
        duration: 1500,
      }),
    };
  });

  const animatedPropsThreshold = useAnimatedProps(() => {
    return {
      strokeDashoffset: withTiming(animateThreshold.value * innerRadius, {
        duration: 1000,
      }),
    };
  });

  const {Colors} = useTheme();

  return (
    <Svg style={StyleSheet.absoluteFill}>
      <AnimatedCircle
        cx={radius}
        cy={radius}
        r={innerRadius}
        fill={'transparent'}
        stroke={Colors.white}
        // strokeDasharray={`${circumfrence} ${circumfrence}`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* <AnimatedCircle
        animatedProps={animatedProps}
        cx={radius}
        cy={radius}
        r={innerRadius}
        fill={'transparent'}
        stroke={'teal'}
        strokeDasharray={`${circumfrence} ${circumfrence}`}
        strokeWidth={strokeWidth - 10}
        strokeLinecap="round"
      /> */}

      <AnimatedCircle
        animatedProps={animatedPropsThreshold}
        cx={radius}
        cy={radius}
        r={innerRadius}
        fill={'transparent'}
        stroke={Colors.indicator}
        strokeDasharray={`${circumfrence} ${circumfrence}`}
        strokeWidth={strokeWidth}
        strokeDashoffset={0}
        strokeLinecap="round"
      />

      <AnimatedCircle
        animatedProps={animatedProps}
        cx={radius}
        cy={radius}
        r={innerRadius}
        fill={'transparent'}
        stroke={Colors.success}
        strokeDasharray={`${circumfrence} ${circumfrence}`}
        strokeWidth={strokeWidth}
        strokeDashoffset={0}
        strokeLinecap="round"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default CircularProgress;