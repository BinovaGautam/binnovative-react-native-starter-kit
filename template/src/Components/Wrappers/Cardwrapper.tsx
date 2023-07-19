import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@/Hooks';
import {Colors, MetricsSizes} from '@/Theme/Variables';

type Props = {
  children: React.ReactNode;
  style?: any;
  elevated?: boolean;
  variant?: 'normal' | 'panel' | 'blank';
};

const Cardwrapper = ({style, children, elevated , variant = "panel"}: Props) => {
  const {Colors} = useTheme();
  return (
    <View style={[styles.card, style, elevated && styles.elevated , variant === 'panel' && styles.panelStyle , variant === 'blank' && styles.blankStyle]}>
      {children}
    </View>
  );
};

export default Cardwrapper;

const styles = StyleSheet.create({
  card: {
    borderRadius: MetricsSizes.SMALL,
    padding: MetricsSizes.SMALL,
    backgroundColor: Colors.INPUT_BG,
    overflow: 'hidden',
  },
  elevated: {
    shadowOffset: {width: 0, height: 2},
    shadowColor: Colors?.primary,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    borderWidth: 0,
  },
  panelStyle :{
    backgroundColor: Colors.BRAND_COLOR+'90',
    borderWidth : 0
  },
  blankStyle :{
    borderWidth : 0,
    backgroundColor: 'transparent',
  }
});
