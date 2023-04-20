import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {ReactNode, useMemo} from 'react';
import {Colors, MetricsSizes} from '@/Theme/Variables';
import {CText} from '../Common';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {DEFAULT_OPACITY} from '@/Utils';

type Props = {
  onPress?: () => void;
  title: string;
  style?: any;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  loadingColor?: string;
  loadingSize?: number;
  loadingStyle?: any;
  txtStyle?: any;
  txtColors?: any;
  secondary?: boolean;
  elevated?: boolean;
  as?: string;
  size?: number;
  LeftComp?: ReactNode;
};

const PrimaryButton = ({
  title,
  onPress,
  style,
  disabled,
  loading,
  loadingText,
  txtStyle,
  txtColors,
  secondary,
  elevated,
  as = 'pmdMed',
  size = MetricsSizes.LARGE * 2,
  LeftComp,
}: Props & TouchableOpacityProps) => {
  let TextColor = secondary ? Colors.PRIMARY : Colors.white;

  const styles = useMemo(
    () =>
      StyleSheet.create({
        btn: {
          backgroundColor: Colors.PRIMARY,
          borderRadius: MetricsSizes.SMALL,
          paddingHorizontal: MetricsSizes.SMALL,
          justifyContent: 'center',
          alignItems: 'center',
          height: size,
          flexDirection: 'row',
        },
        btnSecondary: {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: Colors.PRIMARY,
          elevation: 0,
        },
        elevated: {
          shadowOffset: {width: 0, height: 2},
          shadowColor: Colors?.primary,
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 4,
        },
      }),
    [],
  );
  return (
    <TouchableOpacity
      activeOpacity={DEFAULT_OPACITY}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.btn,
        style,
        secondary && styles.btnSecondary,
        elevated && styles.elevated,
        disabled && {opacity: 0.8},
      ]}>
      {LeftComp && LeftComp}
      <CText as={as} style={[txtStyle]} color={txtColors || TextColor}>
        {loading ? loadingText || title : title}{' '}
      </CText>
      {loading && <ActivityIndicator size={20} color={Colors.white} />}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
