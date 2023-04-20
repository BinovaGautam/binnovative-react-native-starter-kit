/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { StyleSheet, View, ScrollView } from 'react-native';
import React, { ReactNode, useState } from 'react';
import { useTheme } from '@/Hooks';
import { CText, HGap, IconComp, InputComp } from '@/Components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ExamplFragment } from '@/Fragments';
import { Colors } from '@/Theme/Variables';
import {  LoginContainer,  } from '@/Containers';

type Props = {};
type TabItemProps = {
    name: string;
    icon: string;
    component: ReactNode;
};

const ExampleContainer = (_props: Props) => {
    const { Layout, Colors, NavigationTheme, Fonts, MetricsSizes } = useTheme();
    const [showTab, setShowTab] = useState(true);
    const [activeTab, setActiveTab] = React.useState(0);
    const [alphabets, setAlphabets] = useState('abcdefghijklmnopqrstuvwxyz');
    const { BASE100 } = MetricsSizes;

    const _renderColors = (items: any) => {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={[Layout.rowHCenter, Layout.wrap]}>
                    {Object.keys(items).map((key, index) => {
                        return (
                            <View key={index} style={{ padding: 10 }}>
                                <View
                                    style={{
                                        width: BASE100,
                                        height: BASE100,
                                        borderWidth: 0.5,
                                        backgroundColor: items[key],
                                    }}>
                                    <View
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            right: 0,
                                            left: 0,
                                            backgroundColor: Colors.primaryBg,
                                            padding: 5,
                                        }}>
                                        <CText as="psm">{key}</CText>
                                        <CText as="psm">{items[key]}</CText>
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        );
    };

    const _renderFonts = (items: any) => {
        return (
            <View style={{ flex: 1 }}>
                <InputComp
                    onChangeText={(text: string) => setAlphabets(text)}
                    placeholder="Enter text"
                />
                <ScrollView style={{ flex: 1, padding: 10 }}>
                    {Object.keys(items).map((key, index) => {
                        return (
                            <View key={index} style={[Layout.rowCenter]}>
                                <CText style={{ width: 100, backgroundColor: Colors.primaryBg }}>
                                    {key}
                                </CText>
                                <HGap />
                                <View
                                    style={[
                                        Layout.fill,
                                        { justifyContent: 'center', borderWidth: 0.5, padding: 5 },
                                    ]}>
                                    <CText align="left" as={key}>
                                        {alphabets.toUpperCase()}{' '}
                                    </CText>
                                    <CText align="left" as={key}>
                                        {alphabets}{' '}
                                    </CText>
                                </View>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        );
    };

    const TabComponent = (children: ReactNode) => {
        return <View style={{ flex: 1 }}>{children}</View>;
    };

    const TabBar = (items: TabItemProps[]) => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    backgroundColor: '#fefefe',
                    padding: 10,
                    elevation: 4,
                }}>
                {!!items && <></>}
                {items?.map((item, index) => {
                    const isActive = activeTab === index;
                    return (
                        <TouchableOpacity
                            onPress={() => setActiveTab(index)}
                            key={index}
                            style={{ alignItems: 'center' }}>
                            <IconComp
                                name={item.icon}
                                size={isActive ? 25 : 18}
                                color="#000"
                            />
                            <CText as="psm">{item.name}</CText>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    const _renderTab = (index: number) => {
        switch (index) {
            case 0:
                return <LoginContainer />;
            case 1:
                return <LoginContainer />;
            case 2:
                return TabComponent(_renderFonts(Fonts));
            case 3:
                return TabComponent(_renderColors(Colors));
            default:
                return TabComponent(_renderColors(Colors));
        }
    };

    const tabItems: TabItemProps[] = [
        { name: 'UI/UX', icon: 'bulb', component: <ExamplFragment /> },
        {
            name: 'NavTheme',
            icon: 'moon',
            component: _renderColors(NavigationTheme.colors),
        },
        { name: 'TypoGraphy', icon: 'text', component: _renderColors(Colors) },
        { name: 'Colors', icon: 'color-palette', component: _renderColors(Colors) },
    ];

    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                {_renderTab(activeTab)}

                <View style={styles.floatbtn}>
                    <TouchableOpacity onPress={() => setShowTab(!showTab)}>
                        <IconComp
                            type="MaterialIcons"
                            name={showTab ? 'arrow-circle-down' : 'arrow-circle-up'}
                            size={30}
                            color={Colors.PRIMARY}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {showTab && TabBar(tabItems)}
        </View>
    );
};

export default ExampleContainer;

const styles = StyleSheet.create({
    floatbtn: {
        position: 'absolute',
        bottom: 100,
        right: 10,
        backgroundColor: Colors.LIGHT_GRAY,
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
    },
});
