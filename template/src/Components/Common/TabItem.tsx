import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { Colors } from '@/Theme/Variables';

type Props = {
    state: any,
    navigation : any,
    route : any,
    descriptors : any,
    _renderIcon ?: Function,
    index : number
}

const TabItem = ({
   state,
    navigation,
    route,
    descriptors,
    _renderIcon,
    index
}: Props) => {
        const isFocused = state.index === index;
        const {options} = descriptors[route.key];


        const label =
        options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;


       const onPress = () => {
            const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
            }
        };

        const opacity = useSharedValue(0);

        const animationStyle = useAnimatedStyle(() => {
         
          return {
            transform: [
              {scale : withSpring(isFocused ? 0.8 : 1)},
              // {rotate: withTiming(Math.PI * (isFocused ? 2: 0)+'rad', {duration:500}) },
            ],
          };
        });

        // useEffect(() => {
        //     if (isFocused) {
        //         console.log('FOCUSED',label)
        //         opacity.value = withTiming(1,{duration:1500});
        //     }
        // }, [isFocused]);

       


            

            return (
                <TouchableOpacity onPress={onPress}  >
                <Animated.View style={[styles.tab,isFocused && styles.selectedTab,isFocused && animationStyle]}>
                <View style={styles.icon}>
                    {_renderIcon && _renderIcon(label,isFocused)}
                </View>
                {
                    isFocused &&
                    <Text style={[styles.label,isFocused && {color :Colors.font}]}>
                       {" "} {label}
                    </Text> 
                }
                </Animated.View>
                </TouchableOpacity>
            );
}

export default TabItem

const styles = StyleSheet.create({
  tab: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  selectedTab: {
    backgroundColor: Colors.paperBg,
    padding: 5,
    borderRadius: 25,
    paddingHorizontal: 15,
  },
  icon: {
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    color: '#000',
  },
});