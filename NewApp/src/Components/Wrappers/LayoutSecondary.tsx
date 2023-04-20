import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {Colors, MetricsSizes} from '@/Theme/Variables';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@/Hooks';
import DefaultHeaderBg from '../Common/DefaultHeaderBg';
// import {TopHeader, TopTabFragment} from '@/Fragments';
import {VGap} from '../Common';

type Props = {
  children?: React.ReactNode;
  style?: any;
  height?: number;
  onBackPress?: () => void;
  backColor?: string;
  headerTitle?: string;
  statusBarColor?: string;
  noScroll?: boolean;
  hideHeader?: boolean;
  hideBack ?: boolean,
};

//,height && {height : height}

const LayoutDefault = ({
  children,
  style,
  height,
  onBackPress,
  backColor,
  headerTitle,
  statusBarColor,
  noScroll,
  hideHeader,
  hideBack
}: Props) => {
  const {Colors, Images, Layout} = useTheme();
  const scale = useSharedValue(1);

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(scale.value, {duration: 500}),
        },
      ],
    };
  });

  useEffect(() => {
    // scale.value = withTiming(1, {duration: 1500});
  }, []);

  const isIos = Platform.OS === 'ios';

  return (
    <Animated.View style={[styles.container, style, animationStyle]}>
      <View style={[styles.FullContainer, style]}>
        <StatusBar animated
          backgroundColor={Colors.WHITE}
          translucent={true}
          barStyle="dark-content"
        />
        
        {/* {!hideHeader && (
          <TopHeader title={headerTitle} hideBack={hideBack} onBackPress={onBackPress} />
        )} */}
        {noScroll ? (
          children
        ) : (
          <ScrollView style={styles.ScrollContainer}>{children}</ScrollView>
        )}
      </View>
      {isIos && <VGap gap={MetricsSizes.LARGE} /> }
    </Animated.View>
  );
};

export default LayoutDefault;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  FullContainer: {
    flex: 1,
    // backgroundColor: Colors.SELECTION_SUCCESS,
  },
  ScrollContainer: {
    flex: 1,
  },
  FooterContainer: {
    height: 50,
    justifyContent: 'center',
  },
});
