/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { Dimensions } from "react-native"

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  primaryBg :"#f1f1f1",
  text: '#212529',
  font: "#212529",
  primary: '#59A17E',
  paperBg: "#0ACF8347",
  primaryDark: '#01733B',
  success: '#0DAF36',
  error: '#dc3545',
  grey : '#80808060',
  golden: '#FFD700', 
  indicator: "#55efc4"
}

export const NavigationColors = {
  primary: Colors.primary,
}


/**
 * Metrics Sizes
 */
const tiny = 5 // 10 calculate according to the screen size
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30
const {height ,width } = Dimensions.get('window')
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
  height,
  width,
}

/**
 * FontSize
 */
export const FontSize = {
    xs : small, //  10
    sm : small*1.2,//12
    rg : regular, // 15
    md : regular*1.2, // 18
    lg : large*0.8, // 24
    xl : large, //30
    xxl : large*1.2, //36

}

/**
 * FontFamily
 */

let fontPrefix = "Jost"  //REPLACE WITH YOUR FONT NAME

const FontFamily = {
    BLACK : fontPrefix + "-Black",
    BLACK_ITALIC : fontPrefix + "-BlackItalic",
    BOLD : fontPrefix + "-Bold",
    BOLD_ITALIC : fontPrefix + "-BoldItalic",
    EXTRA_BOLD : fontPrefix + "-ExtraBold",
    EXTRA_BOLD_ITALIC : fontPrefix + "-ExtraBoldItalic",
    EXTRA_LIGHT : fontPrefix + "-ExtraLight",
    EXTRA_LIGHT_ITALIC : fontPrefix + "-ExtraLightItalic",
    ITALIC : fontPrefix + "-Italic",
    LIGHT : fontPrefix + "-Light",
    LIGHT_ITALIC : fontPrefix + "-LightItalic",
    MEDIUM : fontPrefix + "-Medium",
    MEDIUM_ITALIC : fontPrefix + "-MediumItalic",
    REGULAR : fontPrefix + "-Regular",
    SEMI_BOLD : fontPrefix + "-SemiBold",
    SEMI_BOLD_ITALIC : fontPrefix + "-SemiBoldItalic",
    THIN : fontPrefix + "-Thin",
    THIN_ITALIC : fontPrefix + "-ThinItalic",

}

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
  FontFamily,
}
