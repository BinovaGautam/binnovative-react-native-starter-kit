import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Cardwrapper } from '../Wrappers'
import { CText, ImgIcon } from '../Common'
import { useTheme } from '@/Hooks'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MetricsSizes } from '@/Theme/Variables'

type Props = {
    imgIcon ?: any,
    size ?: number,
    onPress ?: () => void,
    color ?: string,
    rounded ?: boolean,
    style ?: any
    children ?: React.ReactNode

}

const {small ,tiny} = MetricsSizes
const DIM = small*5


const IconButton = ({
    onPress,
    imgIcon,
    size,
    color,
    rounded,
    style,
    children,
}: Props) => {
    const {Images,Colors} = useTheme()
  return (
    <Pressable  onPress={onPress}>
      <Cardwrapper elevated style={[styles.icon,style,size && {height : size , width :size , borderRadius : rounded ? size/2 : tiny }]}>
        {
        imgIcon ? (
          <ImgIcon icon={imgIcon} size={size || 30} />
        ) : (
          <Ionicons
            name={'ios-camera-outline'}
            size={size || 25}
            color={color || Colors.primary}
          />
        )}
      </Cardwrapper>
    </Pressable>
  );
}

export default IconButton

const styles = StyleSheet.create({
    icon : {
        padding : small,
        height : DIM,
        width : DIM,
        borderRadius : DIM/2,
        justifyContent : 'center',
        alignItems : 'center'
    }
})
