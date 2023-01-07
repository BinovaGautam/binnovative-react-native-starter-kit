import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { Colors } from '@/Theme/Variables'

type Props = {
    children: React.ReactNode
    style ?: any
    elevated ?: boolean
}

const Cardwrapper = ({style , children,elevated}: Props) => {
    const {Colors} = useTheme()
  return (
    <View style={[styles.card,style,elevated && styles.elevated]} >
      {children}
    </View>
  )
}

export default Cardwrapper

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderWidth: 0.5,
    borderColor: Colors.primary+'44',
  },
  elevated: {
    shadowOffset: {width: 0, height: 2},
    shadowColor: Colors?.primary ,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    borderWidth: 0,
  },
});