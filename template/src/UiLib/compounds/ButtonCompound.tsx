import { PressableProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ButtonProps extends PressableProps {

}

const Button = (props: ButtonProps) => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})