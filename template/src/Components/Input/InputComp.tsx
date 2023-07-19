import {StyleSheet, View} from 'react-native';
import React, {ReactNode, useEffect} from 'react';
import {InputWrapper} from '../Wrappers';
import {TextInput} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Colors, MetricsSizes} from '@/Theme/Variables';
import {useTheme} from '@/Hooks';
import { CText } from '@/Components';

interface Props extends React.ComponentProps<typeof TextInput> {
  required?: boolean;
  label?: string;
  RightComp?: ReactNode;
  parentStyle?: any;
  LeftComp?: ReactNode;
  as?: string;
  color?: string;
  textColor?: string;
  error ?: string
}

const InputComp = (props: Props) => {
  let {
    style,
    placeholderTextColor = Colors.GRAY,
    RightComp,
    required,
    label,
    parentStyle,
    LeftComp,
    editable,
    as = 'p',
    color = Colors.INPUT_BG,
    textColor = Colors.font,
    error,
    ...restProps
  } = props;
  const {Fonts} = useTheme();

  let opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    opacity.value = withTiming(1, {duration: 500});
  }, []);

  return (
    <Animated.View style={[animatedStyle]}>
      <InputWrapper
        required={required}
        parentStyle={[parentStyle, !!error && {borderColor: Colors.DARK_RED}]}
        label={label}>
        <View
          style={[
            styles.inputRow,
            editable == false && styles.disabledInput,
            {backgroundColor: color},
          ]}>
          {LeftComp && LeftComp}
          <TextInput
            style={[Fonts?.[as], , styles.input, style, {color: textColor}]}
            placeholderTextColor={placeholderTextColor}
            editable={editable}
            {...restProps}
          />
          {RightComp && RightComp}
        </View>
        {error && <CText as="pMed" color={Colors.DARK_RED}>{error}</CText> }
      </InputWrapper>
    </Animated.View>
  );
};

export default InputComp;

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderRadius: MetricsSizes.SMALL,
  },
  input: {
    minHeight: MetricsSizes.XXLARGE * 2,
    padding: MetricsSizes.SMALL,
    flex: 1,
    color: Colors.font,
    letterSpacing : MetricsSizes.TINY/2
  },
  disabledInput: {
    backgroundColor: Colors.primaryBg,
  },
});
