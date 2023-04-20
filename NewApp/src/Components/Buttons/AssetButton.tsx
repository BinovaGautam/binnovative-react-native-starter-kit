import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ElevatedButton from './ElevatedButton';
import { useTheme } from '@/Hooks';
import { MetricsSizes } from '@/Theme/Variables';
import { CText } from '@/Components';

const {height, width , tiny , small ,regular} = MetricsSizes

type Props = {
  onPress?: () => void;
  onRemove?: () => void;
  style?: any;
  iconName?: any;
  assetObj?: any;
};

export const BTN_DIM = width / 5;

const AssetButton = ({onPress, style, iconName, assetObj, onRemove}: Props) => {
    const {Colors} = useTheme();
  // later pass asset to cover the icon
  let {uri, type} = assetObj || {};
  const isImage = type === "image/jpeg" || type === "image/png";
  return (
    <View style={styles.btnWrapper}>
      {/* <CText > {JSON.stringify(assetObj)} </CText> */}
      <ElevatedButton style={[styles.btn, style]} onPress={onPress}>
        {assetObj ? (
          uri ? (
            isImage ? (
              <View style={styles.imgWrapper}>
                <Image source={{uri}} style={styles.img} />
              </View>
            ) : (
              //  <Text> {isImage ? 'YES' : 'no'} {asset_type}  </Text>
              <MaterialIcons
                name={'ondemand-video'}
                size={30}
                color={Colors.primary}
              />
            )
          ) : (
            <Ionicons
              name={'ios-camera-outline'}
              size={25}
              color={Colors.primary}
            />
          )
        ) : (
          <Ionicons
            name={iconName || 'ios-camera-outline'}
            size={25}
            color={Colors.primary}
          />
        )}
      </ElevatedButton>
      {onRemove  && (
        <Pressable style={styles.btnRemove} onPress={onRemove}>
          <Ionicons name="close" size={14} color={Colors.primary} />
        </Pressable>
      )}
    </View>
  );
};

export default AssetButton;

const styles = StyleSheet.create({
  btnWrapper: {
    marginRight: tiny,
    marginBottom: tiny,
  },
  btn: {
    width: BTN_DIM,
    height: BTN_DIM,
    
  },
  btnRemove: {
    position: 'absolute',
    top: tiny,
    right: tiny,
    width: BTN_DIM / 6,
    height: BTN_DIM / 6,
    borderRadius: BTN_DIM / 12,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: BTN_DIM / 12,
  },
  imgWrapper: {
    width: BTN_DIM,
    height: BTN_DIM,
  },
});
