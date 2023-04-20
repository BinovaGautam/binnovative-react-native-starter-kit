import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode, useEffect, useState } from 'react'
import { BlurView, BlurViewProps } from '@react-native-community/blur'
import { MetricsSizes } from '@/Theme/Variables'
import { useTheme } from '@/Hooks'

//this wrapper is used to wrap the blur view so the whole app can have same blur effect

type Props = {
    children: ReactNode,
    containerStyle?: any,

}



const BlurWrapper = ({
    children,
    containerStyle,
    blurAmount = 2,
    blurType = 'light',
    ...restProps
}: Props & BlurViewProps) => {
    const {Colors, Images, Layout} = useTheme();
    const [blurRadius, setBlurRadius] = useState(2);
    let animationFrameId: number;

    const throttledUpdateBlurRadius = (newRadius : number) => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        animationFrameId = requestAnimationFrame(() => {
            updateBlurRadius(newRadius);
        });
    };

    const updateBlurRadius = (newRadius : number) => {
        setBlurRadius(newRadius);
    };

    useEffect(() => {
        throttledUpdateBlurRadius(blurAmount);
    }, [blurAmount]);
    
    return (
        <View style={[containerStyle]}>
            {/* <ImageBackground source={Images.whiteBlur} style={[Layout.fill]}> */}
            {/* <BlurView blurType={blurType} blurAmount={blurRadius} {...restProps} overlayColor='transparent' style={[containerStyle]}  > */}
                    {children}
            {/* </BlurView> */}
            {/* </ImageBackground> */}
        </View>
    )
}

export default BlurWrapper

const styles = StyleSheet.create({
   
})