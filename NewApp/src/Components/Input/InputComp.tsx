import { StyleSheet, Text, View } from 'react-native'
import React, { Component, ReactComponentElement, ReactNode, useEffect } from 'react'
import { InputWrapper } from '../Wrappers'
import { TextInput } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Colors } from '@/Theme/Variables'

interface Props extends React.ComponentProps<typeof TextInput>  {
   
    required ?: boolean,
    label ?: string,
    RightSide ?: ReactNode,
    parentStyle ?: any,
    noSign ?: boolean,
    LeftComp ?: ReactNode
}

const InputComp = (props: Props) => {
 let {
   value,
   placeholder,
   RightSide,
   onChangeText,
   onFocus,
   onBlur,
   style,
   multiline,
   numberOfLines,
   autoCapitalize,
   autoCorrect,
   secureTextEntry,
   keyboardType,
   returnKeyType,
   onSubmitEditing,
   onKeyPress,
   required,
   label,
   parentStyle,
   noSign,
   LeftComp,
   editable
 } = props
 
  let opacity = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value
    }
  })

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1500 })
  }, [])

  
  return (
    <Animated.View style={[animatedStyle]} >

      <InputWrapper noSign={noSign} required={required} parentStyle={[parentStyle,]} label={label}>
        <View style={[styles.inputRow, editable == false && styles.disabledInput]}>
          {LeftComp && LeftComp}
          <TextInput
            value={value}
            onChangeText={onChangeText}
            style={[styles.input , ]}
            placeholder={placeholder || 'Placeholder'}
            secureTextEntry={secureTextEntry}
            {...props}
            
          />
            {RightSide && RightSide }
        </View>
      </InputWrapper>
    </Animated.View>
    
  );
}

export default InputComp

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    // justifyContent: 'space-between',
  },
  input: {
    padding: 5,
    marginHorizontal: 10,
    fontSize: 14,
    flex: 1,
    color : Colors.font,
  },
  disabledInput: {
    backgroundColor: Colors.primaryBg,
  },
});