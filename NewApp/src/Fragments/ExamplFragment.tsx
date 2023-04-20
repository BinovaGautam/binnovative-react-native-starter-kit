import {ActivityIndicator, PermissionsAndroid, StyleSheet, Vibration, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {useTheme} from '@/Hooks';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {Colors, MetricsSizes} from '@/Theme/Variables';
import {
  Cardwrapper,
  CText,
  FullScreenLoader,
  IconComp,
  LayoutDefault,
  PrimaryButton,
  VGap,
} from '@/Components';
import { runOnJS } from 'react-native-reanimated';
import { useEffect } from 'react';
import Lottie from 'lottie-react-native';
import { LottieScanner } from '@/Assets/Lottie/lottiefiles';
import PopupWrapper from '@/Components/Wrappers/PopUpWrapper';
import {Loader} from '@/Components';

type Props = {};

const CARD_DIM = MetricsSizes.SCREEN_WIDTH * 0.85;

const ExampleFragment = (props: Props) => {
  const {Layout, Colors, Images} = useTheme();
  const [torch , setTorch] = useState<"on" | "off">("off")

  return(
    <LayoutDefault >
      <CText >Example Fragment</CText>
      <Loader />
    </LayoutDefault>
  )
};

export default ExampleFragment;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: MetricsSizes.MEDIUM,
    height: MetricsSizes.SCREEN_HEIGHT,
  },
  listContainer: {
    backgroundColor: Colors.WHITE,
    padding: MetricsSizes.TINY,
  },
  scanContainer:{
    height: MetricsSizes.SCREEN_HEIGHT,
    width: MetricsSizes.SCREEN_WIDTH,
    // backgroundColor: Colors.TRANSLUSCENT_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,

  },
 
  scanBox: {
    height: MetricsSizes.BASE100*2.5,
    width: MetricsSizes.BASE100*2.5,
    borderWidth: 2,
    borderRadius: MetricsSizes.LARGE,
    borderColor: Colors.WHITE,
    backgroundColor: Colors.TRANSPARENT,
    
  },
  floatbtn: {
    position: 'absolute',
    bottom: MetricsSizes.XXLARGE,
    right: 10,
    backgroundColor: Colors.LIGHT_GRAY,
    height: MetricsSizes.XXLARGE,
    width: MetricsSizes.XXLARGE,
    borderRadius: MetricsSizes.XXLARGE/2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});
