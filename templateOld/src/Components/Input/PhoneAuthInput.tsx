import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

type RNTextInputProps = React.ComponentProps<typeof TextInput>;

interface Props  {
    onChange: (text: string) => void;
}

const AuthInput = ({onChange}: Props) => {
  return (
    <View style={styles.inputContainer} >
      <Text >+91 -</Text>
      <TextInput onChangeText={onChange} maxLength={10} underlineColorAndroid={"transparent"} style={styles.input} />
    </View>
  )
}

export default AuthInput

const styles = StyleSheet.create({
  inputContainer: {
    height: 40,
    margin: 30,
    backgroundColor: '#fff',
    borderColor: '#fff',
    elevation : 4,
    padding:5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal :10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    padding:0
  },
})