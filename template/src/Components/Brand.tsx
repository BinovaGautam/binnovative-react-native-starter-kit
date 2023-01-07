import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {useTheme} from '@/Hooks';

type Props = {
  height?: number | string;
  width?: number | string;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

const Brand = ({height, width, mode}: Props) => {
  const {Layout, Images} = useTheme();

  return (
    <View style={{height, width}}>
      <Image style={Layout.fullSize} source={Images.logo} resizeMode={mode} />
    </View>
  );
};

Brand.defaultProps = {
  height: 150,
  width: 150,
  mode: 'contain',
};

export default Brand;
