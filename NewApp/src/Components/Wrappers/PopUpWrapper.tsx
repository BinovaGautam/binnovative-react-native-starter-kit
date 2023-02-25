import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Cardwrapper from './Cardwrapper';

const {height, width} = Dimensions.get('window');

type Props = {
  children: React.ReactNode;
  onClose?: () => void;
  show: boolean;
  style?: any;
};

const PopupWrapper = ({onClose, children, show, style}: Props) => {
  return (
    <>
      {show && (
        <Pressable
          onPress={onClose}
          style={[StyleSheet.absoluteFill, styles.overlay]}>
          <Pressable style={{width: '100%', alignItems: 'center'}}>
            <Cardwrapper elevated style={[styles.container, style]}>
              <View style={{width: '100%'}}>{children}</View>
            </Cardwrapper>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default PopupWrapper;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    minHeight: 100,
    backgroundColor: '#fff',
    maxHeight: height / 2,
    overflow: 'scroll',
  },
});
