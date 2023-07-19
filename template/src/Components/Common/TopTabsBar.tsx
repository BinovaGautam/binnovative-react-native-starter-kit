import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@/Hooks'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CText, VGap } from '@/Components'
import { TextAlignType } from '@/Types'

type Props = {
    tabs?: string[],
    onSelect?: (index: number) => void,
    align?: TextAlignType
}

const TopTabsBar = ({
    tabs = ['Tab1', 'Tab2', 'Tab3'],
    onSelect,
    align = 'center'
}: Props) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const { Layout, Colors, MetricsSizes } = useTheme()

    const handleSelect = (index: number) => {
        setSelectedTab(index)
        onSelect && onSelect(index)
    }
    return (
        <View style={[Layout.rowHCenter, Layout.fullWidth,]} >
            {tabs.map((tab, index) => {
                const isSelected = selectedTab === index
                return (
                    <View key={index} style={[Layout.fill, Layout.fullWidth, { marginHorizontal: MetricsSizes.TINY,}]}>
                        <TouchableOpacity onPress={() => handleSelect(index)}  >
                            <CText as={isSelected ? "pbold" : "pMed"} align={align} >{tab} </CText>
                        </TouchableOpacity>
                        <VGap gap={MetricsSizes.SMALL} />
                        {isSelected && <View style={[Layout.fullWidth, { height: MetricsSizes.SMALL, borderRadius: MetricsSizes.TINY, backgroundColor: Colors.BRAND_COLOR }]} />}
                    </View>
                )
            })}
        </View>
    )
}

export default TopTabsBar

const styles = StyleSheet.create({})