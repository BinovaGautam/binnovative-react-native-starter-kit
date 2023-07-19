import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@/Hooks';
import {Colors, MetricsSizes} from '@/Theme/Variables';
import BlurWrapper from './BlurWrapper';
import GradientCard from './GradientCard';
import { DefaultCardProps, GradientCardProps } from '@/Types';
import { CText } from '../Common';
import { BlurViewProps } from '@react-native-community/blur';



const DefaultCard = ({
  style,
  children,
  containerStyle,
  elevated,
  gradientColors  ,
  borderWidth = 1,
  opacity = 80,
  ...blurProps
}: DefaultCardProps & GradientCardProps & BlurViewProps) => {
  const {Colors,Layout} = useTheme();
  return (
    <>
    <BlurWrapper {...blurProps}
      containerStyle={[styles.card, containerStyle, elevated && styles.elevated]}>
        <View style={{flex:1}}>
            <GradientCard opacity={opacity} style={[Layout.fill,style]} gradientColors={gradientColors} borderWidth={borderWidth}>
                {children}
            </GradientCard>
        </View>
    </BlurWrapper>
    </>
  );
};

export default DefaultCard;

const styles = StyleSheet.create({
  card: {
    // borderRadius: MetricsSizes.TINY,
    // borderWidth: 0.5,
    borderColor: Colors.LIGHT_GRAY,
    overflow: 'hidden',
    // elevation: 1,
    
  },
  elevated: {
    shadowOffset: {width: 0, height: 2},
    shadowColor: Colors?.primary,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    borderWidth: 0,
  },
});
