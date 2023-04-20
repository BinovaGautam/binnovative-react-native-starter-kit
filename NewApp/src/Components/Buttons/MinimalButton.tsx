import { ActivityIndicator, StyleSheet, Text, TouchableOpacityProps, View } from 'react-native'
import React, { useMemo } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CText, HGap } from '@/Components'
import { useTheme } from '@/Hooks'
import { Colors } from '@/Theme/Variables'

type Props = {
    title: string,
    RightComp?: React.ReactNode,
    LeftComp?: React.ReactNode,
    onPress?: () => void;
    as?: string,
    Color?: string
    outline?: boolean
    loading?: boolean
    loadingText?: string
}

const MinimalButton = ({
    title,
    onPress,
    RightComp,
    LeftComp,
    as = "pbold",
    Color = Colors.font,
    outline = false,
    loading = false,
    loadingText = "Loading..",
    disabled = false,
    ...restprops
}: Props & TouchableOpacityProps) => {
    const { Layout, MetricsSizes } = useTheme()

    const styles = useMemo(() => StyleSheet.create({
        outline: {
            borderWidth: 1,
            borderColor: Color,
            borderRadius: 5,
            paddingHorizontal: MetricsSizes.SMALL,
            paddingVertical: MetricsSizes.TINY,
        }
    }) , [Color])
    return (
        <TouchableOpacity disabled={disabled || loading} style={[Layout.rowCenter, outline && styles.outline, disabled && { opacity: 0.5 }]} onPress={onPress}  >
            {LeftComp && LeftComp}
            <CText color={Color} align="center" as={as}>{loading ? loadingText : title}</CText>
            {/* <HGap/> */}
            {loading && <ActivityIndicator color={Color} size={MetricsSizes.REGULAR} />}
            {RightComp && RightComp}

        </TouchableOpacity>
    )
}

export default MinimalButton

