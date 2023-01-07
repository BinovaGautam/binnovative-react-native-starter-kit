import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { CText } from '@/Components'

type Props = {}

const ExampleContainer = (props: Props) => {
  const {Layout} = useTheme()
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <CText > Hell here we go</CText>
    </View>
  );
}

export default ExampleContainer

const styles = StyleSheet.create({})