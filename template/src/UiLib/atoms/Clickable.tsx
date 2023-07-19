import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ClickableProps extends PressableProps {

}

const Clickable = (props: ClickableProps) => {
  return (
    <Pressable {...props}>
        {props.children}
    </Pressable>
  )
}

export default Clickable

const styles = StyleSheet.create({})