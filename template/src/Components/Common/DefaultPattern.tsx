import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, MetricsSizes } from '@/Theme/Variables'
import { GradientCard } from '../Wrappers';
import { useTheme } from '@/Hooks';
type Props = {}

const {LARGE} = MetricsSizes;

const CIRCLE_SIZE = LARGE*9
const POSITION1 = CIRCLE_SIZE/2
const POSITION2 = CIRCLE_SIZE/9

const DefaultPattern = (props: Props) => {
  const {Colors, MetricsSizes} = useTheme()
  return (
    <View>
      <GradientCard
        borderWidth={0}
        gradientColors={Colors.GRADIENT_1}
        style={styles.pattern2}
      />
      <GradientCard
        borderWidth={0}
        gradientColors={Colors.GRADIENT_2}
        style={styles.pattern1}
      />
    </View>
  );
}

export default DefaultPattern

const styles = StyleSheet.create({
  pattern1: {
    position: 'absolute',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    // backgroundColor: Colors.PINKISH_RED+'60',
    borderRadius: CIRCLE_SIZE / 2,
    top: -POSITION1,
    left: -POSITION2,
  },
  pattern2: {
    position: 'absolute',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    // backgroundColor: Colors.SELECTION_SUCCESS+'55',
    borderRadius: CIRCLE_SIZE / 2,
    top: -POSITION2,
    left: -POSITION1,
  },
});