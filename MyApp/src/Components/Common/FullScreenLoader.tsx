import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PopUpWrapper } from '../Wrappers'
import { useTheme } from '@/Hooks'
import { CText } from '.'

type Props = {
    loadingTxt ?: string
}

const FullScreenLoader = ({
    loadingTxt
}: Props) => {
    const {Colors} = useTheme()
  return (
    <PopUpWrapper style={{justifyContent: 'center',}}  show={true} >
        <View style={styles.container} >
            <CText as="h4" color={Colors.primary} >{loadingTxt || 'Fetching ... '}</CText>
            <ActivityIndicator size="large" color={Colors.primary} />
        </View>
    </PopUpWrapper>
  )
}

export default FullScreenLoader

const styles = StyleSheet.create({
    container: {
       
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection : 'row'
    }
})