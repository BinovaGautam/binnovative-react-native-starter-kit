import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import {useTheme} from '@/Hooks';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DEFAULT_OPACITY} from '@/Utils';
import { MetricsSizes } from '@/Theme/Variables';

type Props = {
  height?: number;
  style?: any;
  LeftComp?: ReactNode;
  RightComp?: ReactNode;
  children?: ReactNode;
  onPress?: () => void;
};

const RowItem = ({
  style,
  LeftComp,
  RightComp,
  children,
  onPress,
  height = MetricsSizes.XXLARGE
}: Props) => {
  const {Layout, Colors, MetricsSizes} = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={DEFAULT_OPACITY}
      style={[
        Layout.fullWidth,
        Layout.rowHCenter,
        style,
        {height: height ,},
      ]}>
      {LeftComp}
      <View style={[Layout.fill]}>{children}</View>
      {RightComp}
    </TouchableOpacity>
  );
};

export default RowItem;

const styles = StyleSheet.create({});
