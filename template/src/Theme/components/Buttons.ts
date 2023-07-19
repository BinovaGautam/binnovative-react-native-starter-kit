import { StyleSheet } from 'react-native'
import { CommonParams } from '@/Theme/theme'

export default function <C>({ Colors, Gutters, Layout }: CommonParams<C>) {
  const base = {
    ...Layout.center,
    // ...Gutters.BASE100BPadding,
    height: 40,
    backgroundColor: Colors.primary,
  }
  const rounded = {
    ...base,
    borderRadius: 20,
  }

  return StyleSheet.create({
    base,
    rounded,
    outline: {
      ...base,
      backgroundColor: Colors.TRANSPARENT,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.TRANSPARENT,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
  })
}
