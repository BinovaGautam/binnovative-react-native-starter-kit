/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { Dimensions } from 'react-native';

/**
 * Colors
 */
export const Colors = {
  PRIMARY: '#000',
  BRAND_COLOR: '#C72942',
  PINKISH_RED: '#B6223B',
  RED_1: '#CC2742',
  RED_2: '#A82138',
  RED_3: '#F2D5DA',
  DARK_RED: '#A82138',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  LIGHT_GRAY: '#F5F5F5',
  GRAY: '#979797',
  DARK_GRAY: '#4A4A4A',
  TEXT: '#000',
  GREEN: '#32AD6B',
  SELECTION_SUCCESS: '#9AECDB',
  BORDER_COLOR: 'rgba(182,34,59,0.3)',
  TRANSLUCENT_WHITE: '#55efc450',
  INPUT_BG: '#f1f1f1',
  // Example colors:
  TRANSPARENT: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  primaryBg: '#f1f1f1',
  text: '#212529',
  font: '#212529',
  primary: '#59A17E',
  paperBg: '#0ACF8347',
  primaryDark: '#01733B',
  success: '#0DAF36',
  error: '#dc3545',
  grey: '#80808060',
  golden: '#FFD700',
  indicator: '#55efc4',
  PRIMARY_DISABLED: '#26426D50',

  //Gradients
  GRADIENT_1: ['#26426D', '#B6223B'],
  GRADIENT_2: ['#B6223B', '#26426D'],
  GRADIENT_3: ['#B6223B', '#A82138'],
  GRADIENT_4: ['#A82138', '#B6223B'],
  GRADIENT_5: ['#A82138', '#F2D5DA'],
  GRADIENT_6: ['#F2D5DA', '#A82138'],
  GRADIENT_CREDITCARD: ['#F1F1F1', '#F2D5DA', '#A82138'],
  GRADIENT_LIGHT: ['#F2D5DA', '#FFFFFF'],
  GRADIENT_WHITE: ['#f1f1f1', '#f1f1f1'],
  GRAIDENT_DARK: ['#181f1a', '#1d1f1d'],
  GRADIENT3BREAKS_1: ['#26426D', '#1D1F1D', '#A82138'],
  GRADIENT3BREAKS_2: ['#B6223B', '#26426D', '#1D1F1D'],
  GRADIENT6BREAKS_1: [
    '#0F0F0F',
    '#26426D',
    '#1D1F1D',
    '#A82138',
    '#B6223B',
    '#F2D5DA',
  ],
  GRADIENT6BREAKS_REVERSE: [
    '#F2D5DA',
    '#B6223B',
    '#A82138',
    '#1D1F1D',
    '#26426D',
    '#0F0F0F',
  ],
};

export const NavigationColors = {
  primary: Colors.primary,
};

/**
 * Metrics Sizes
 */

let { height, width } = Dimensions.get('window');

let base10 = Math.floor(width / 41);

export const MetricsSizes = {
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  NAVBAR_HEIGHT: 64,
  TINY: base10 / 2,
  SMALL: base10,
  REGULAR: base10 * 1.5,
  MEDIUM: base10 * 2,
  LARGE: base10 * 3,
  XLARGE: base10 * 4,
  XXLARGE: base10 * 5,
  BASE80: base10 * 8,
  BASE100: base10 * 10,
  BASE200: base10 * 20,
};

const { SMALL, REGULAR, LARGE } = MetricsSizes;

/**
 * FontSize
 */
export const FontSize = {
  xs: SMALL, //  10
  sm: SMALL * 1.2, //12
  rg: REGULAR, // 15
  md: REGULAR * 1.2, // 18
  lg: LARGE * 0.8, // 24
  xl: LARGE, //30
  xxl: LARGE * 1.2, //36
};

/**
 * FontFamily
 */

let fontPrefix = 'Jost'; //REPLACE WITH YOUR FONT NAME

const FontFamily = {
  BLACK: fontPrefix + '-Black',
  BLACK_ITALIC: fontPrefix + '-BlackItalic',
  BOLD: fontPrefix + '-Bold',
  BOLD_ITALIC: fontPrefix + '-BoldItalic',
  EXTRA_BOLD: fontPrefix + '-ExtraBold',
  EXTRA_BOLD_ITALIC: fontPrefix + '-ExtraBoldItalic',
  EXTRA_LIGHT: fontPrefix + '-ExtraLight',
  EXTRA_LIGHT_ITALIC: fontPrefix + '-ExtraLightItalic',
  ITALIC: fontPrefix + '-Italic',
  LIGHT: fontPrefix + '-Light',
  LIGHT_ITALIC: fontPrefix + '-LightItalic',
  MEDIUM: fontPrefix + '-Medium',
  MEDIUM_ITALIC: fontPrefix + '-MediumItalic',
  REGULAR: fontPrefix + '-Regular',
  SEMI_BOLD: fontPrefix + '-SemiBold',
  SEMI_BOLD_ITALIC: fontPrefix + '-SemiBoldItalic',
  THIN: fontPrefix + '-Thin',
  THIN_ITALIC: fontPrefix + '-ThinItalic',
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
  FontFamily,
};
