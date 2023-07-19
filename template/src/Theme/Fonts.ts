/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'
import { ThemeVariables } from './theme'

export default function ({ FontSize, Colors, FontFamily }: ThemeVariables) {
  return StyleSheet.create({
    h1 : {
      fontSize : FontSize.xxl,
      fontFamily  : FontFamily.BOLD,
    },
    h2 : {
      fontSize : FontSize.xl,
      fontFamily  : FontFamily.BOLD,
    },
    h3 : {
      fontSize : FontSize.lg,
      fontFamily  : FontFamily.BOLD,
    },
    h4 : {
      fontSize : FontSize.md,
      fontFamily  : FontFamily.BOLD,
    },
    h5 : {
      fontSize : FontSize.rg,
      fontFamily  : FontFamily.BOLD,
    },
    h6 : {
      fontSize : FontSize.sm,
      fontFamily  : FontFamily.BOLD,
    },
    h7 : {
      fontSize : FontSize.xs,
      fontFamily  : FontFamily.BOLD,
    },
    p :{
      fontSize : FontSize.rg,
      fontFamily  : FontFamily.REGULAR,
    },
    pmd :{
      fontSize : FontSize.md,
      fontFamily  : FontFamily.REGULAR,
    },
    plg :{
      fontSize : FontSize.lg,
      fontFamily  : FontFamily.REGULAR,
    },
    psm :{
      fontSize : FontSize.sm,
      fontFamily  : FontFamily.REGULAR,
    },
    pxs :{
      fontSize : FontSize.xs,
      fontFamily  : FontFamily.REGULAR,
    },
    pbold :{
      fontSize : FontSize.rg,
      fontFamily  : FontFamily.BOLD,
    },
    pmdbold :{
      fontSize : FontSize.md,
      fontFamily  : FontFamily.BOLD,
    },
    plgbold :{
      fontSize : FontSize.lg,
      fontFamily  : FontFamily.BOLD,
    },
    psmbold :{
      fontSize : FontSize.sm,
      fontFamily  : FontFamily.BOLD,
    },
    pxsbold :{
      fontSize : FontSize.xs,
      fontFamily  : FontFamily.BOLD,
    },
    pMed :{
      fontSize : FontSize.rg,
      fontFamily  : FontFamily.MEDIUM,
    },
    pmdMed :{
      fontSize : FontSize.md,
      fontFamily  : FontFamily.MEDIUM,
    },
    plgMed :{
      fontSize : FontSize.lg,
      fontFamily  : FontFamily.MEDIUM,
    },
    psmMed :{
      fontSize : FontSize.sm,
      fontFamily  : FontFamily.MEDIUM,
    },
    pxsMed :{
      fontSize : FontSize.xs,
      fontFamily  : FontFamily.MEDIUM,
    },
    pThin:{
      fontSize : FontSize.rg,
      fontFamily  : FontFamily.THIN,
    },
    pmdThin:{
      fontSize : FontSize.md,
      fontFamily  : FontFamily.THIN,
    },
    plgThin:{
      fontSize : FontSize.lg,
      fontFamily  : FontFamily.THIN,
    },
    psmThin:{
      fontSize : FontSize.sm,
      fontFamily  : FontFamily.THIN,
    },
    pxsThin:{
      fontSize : FontSize.xs,
      fontFamily  : FontFamily.THIN,
    },
    plight: {
      fontSize : FontSize.rg,
      fontFamily  : FontFamily.LIGHT,
    },
    pmdlight: {
      fontSize : FontSize.md,
      fontFamily  : FontFamily.LIGHT,
    },
    plglight: {
      fontSize : FontSize.lg,
      fontFamily  : FontFamily.LIGHT,
    },
    psmlight: {
      fontSize : FontSize.sm,
      fontFamily  : FontFamily.LIGHT,
    },
    pxslight: {
      fontSize : FontSize.xs,
      fontFamily  : FontFamily.LIGHT,
    },

  })
}
