import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Cardwrapper, InputWrapper} from '../Wrappers';

type Props = {
  children: React.ReactNode;
  style?: any;
  onPress?: () => void;
};

const ElevatedButton = ({style, children, onPress}: Props) => {
  return (
    <Cardwrapper style={[styles.wrapper, style]}>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        {children}
      </TouchableOpacity>
    </Cardwrapper>
  );
};

export default ElevatedButton;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    minWidth: 50,
    marginTop: 10,
    height: 48,
  },
});
