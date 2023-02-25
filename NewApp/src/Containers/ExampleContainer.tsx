import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { CText, IconComp } from '@/Components'

type Props = {}

const ExampleContainer = (props: Props) => {
  const {Layout} = useTheme()
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <CText > Hell here we go</CText>
       <IconComp name="home" size={30} color="#000" />
    </View>
  );
}

export default ExampleContainer

const styles = StyleSheet.create({})