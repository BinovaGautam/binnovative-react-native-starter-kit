import { ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Cardwrapper } from '../Wrappers'
import { CText, IconComp, ImgIcon } from '../Common'
import { useTheme } from '@/Hooks'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MetricsSizes } from '@/Theme/Variables'
import { IconType } from '@/Types/Generaltypes'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {
  imgIcon?: ImageSourcePropType,
  size?: number,
  onPress?: () => void,
  color?: string,
  rounded?: boolean,
  style?: any
  children?: React.ReactNode,
  iconName?: string
  iconType?: IconType
  iconSize?: number

}

const { SMALL, TINY } = MetricsSizes
const DIM = SMALL * 5


const IconButton = ({
  onPress,
  imgIcon,
  size,
  color,
  rounded,
  style,
  children,
  iconName,
  iconType = 'Ionicons',
  iconSize = DIM * 0.4
}: Props) => {
  const { Images, Colors } = useTheme()
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.icon, style, ]}>
        {
          imgIcon ? (
            <ImgIcon icon={imgIcon} size={size || 30} />
          ) : (
            <IconComp
              type={iconType}
              name={iconName || 'ios-camera-outline'}
              size={iconSize}
              color={color || Colors.primaryDark}
            />
          )}
      </View>
    </TouchableOpacity>
  );
}

export default IconButton

const styles = StyleSheet.create({
  icon: {
    padding: TINY,
    height: DIM,
    width: DIM,
    borderRadius: DIM / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    // borderWidth :0,
  }
})
