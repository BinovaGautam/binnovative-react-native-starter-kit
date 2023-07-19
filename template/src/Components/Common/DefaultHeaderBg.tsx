import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DefaultPattern from './DefaultPattern';
import { Colors, MetricsSizes } from '@/Theme/Variables';

type Props = {
  bgColor?: string;
};

const {LARGE} = MetricsSizes;

const DefaultHeaderBg = (props: Props) => {
  const {bgColor} = props;
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: bgColor ? bgColor : Colors.WHITE},
      ]}>
      <DefaultPattern />
    </View>
  );
};

export default DefaultHeaderBg;

const styles = StyleSheet.create({
  container: {
    height: LARGE * 10,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
});
