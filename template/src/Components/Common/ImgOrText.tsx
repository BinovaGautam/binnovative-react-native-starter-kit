/* eslint-disable react-native/no-inline-styles */
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors, MetricsSizes} from '@/Theme/Variables';
import {getInitials} from '@/Utils';
import {CText} from '@/Components';
import {useTheme} from '@/Hooks';

/*
 * This is a component that is used to display an image or text
 * It is used in the following components:
 *  It either takes image url or text as props
 *  image can be {uri : 'https://www.google.com'} or require('path/to/image')
 *  if image url is present then it displays image
 *  if text is present then it displays text
 */

type Props = {
  source?: ImageSourcePropType;
  text?: string;
  size?: number;
  color ?: string;
};

const ImgOrText = ({source, text, size = MetricsSizes.XXLARGE , color = Colors.PINKISH_RED}: Props) => {
  const {Colors, Layout, MetricsSizes} = useTheme();
  return (
    <View
      style={[
        Layout.justifyContentCenter,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          overflow: 'hidden',
          backgroundColor: color,
        },
      ]}>
      {source ? (
        <Image
          source={source}
          style={[
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              overflow: 'hidden',
            },
          ]}
        />
      ) : (
        <CText as="h3" align="center" color={Colors.WHITE}>
          {''}
          {getInitials(text || '')}{''}
        </CText>
      )}
    </View>
  );
};

export default ImgOrText;

const styles = StyleSheet.create({});
