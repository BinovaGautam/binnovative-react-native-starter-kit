import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { Cardwrapper, GradientCard } from '../Wrappers'
import { useTheme } from '@/Hooks'
import { MetricsSizes } from '@/Theme/Variables'
import { CText } from '.'

type Props = {
    size ?:number;
    variant ?: 'logo' | 'profile' ,
    image ?: any,
    factor ?: number,
    borderWidth ?: number,
    elevated ?: boolean,
}



const ImgBadge = ({size = 100, variant = 'logo' , image , factor = 0.6,borderWidth = 2 , elevated}: Props) => {
    const {Images} = useTheme()

    const BADGE_DIM = useMemo(() => size || MetricsSizes.SMALL * 10 , [size])
    const ImgSource = useMemo(() =>  image ||  Images.brandLogo , [variant, image])
    const FACTCOR = useMemo(() => variant === 'logo' ? 0.5  : variant === 'profile' ? 1:  factor, [variant])

    const styles = useMemo(() => StyleSheet.create({
        container: {
            width: BADGE_DIM,
            height: BADGE_DIM,
            borderRadius: BADGE_DIM / 2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        img: {
            width: BADGE_DIM * FACTCOR,
            height: BADGE_DIM * FACTCOR,
        }
    })
        , [BADGE_DIM, FACTCOR])
  return (
      <Cardwrapper elevated={elevated} style={styles.container}>
          <Image source={ImgSource} style={styles.img} />
      </Cardwrapper>
  )
}

export default ImgBadge
