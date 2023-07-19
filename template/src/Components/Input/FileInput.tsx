import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { InputWrapper } from '../Wrappers'
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {
    label?: string;
    containerStyle?: any;
    required ?: boolean,
    parentStyle ?: any,
    description ? : string
}

const FileInput = ({
    label,
    containerStyle,
    required,
    parentStyle,
    description
}: Props) => {
  return (
    <InputWrapper label={label} parentStyle={parentStyle}>
      <TouchableOpacity style={styles.container}>
        <Feather name="upload" size={30} color="#000" />
        <Text style={styles.text}>{description || 'File Input'} </Text>
      </TouchableOpacity>
    </InputWrapper>
  );
}

export default FileInput

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        padding: 10,
    },
    text: {
        marginTop: 5,
        fontSize: 14,
        color : '#aaa',
        fontWeight: '300',
    }
})