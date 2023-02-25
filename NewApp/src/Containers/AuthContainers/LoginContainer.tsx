import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {useTheme} from '@/Hooks';
import {Colors} from '@/Theme/Variables';
import {InputComp, PrimaryButton} from '@/Components';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {};

const LoginContainer = (props: Props) => {
  const {Layout, Images} = useTheme();
  const [isVisible, setVisible] = useState(false);
  
  return (
    <View style={[Layout.fill, {backgroundColor: '#fff'}]}>
      <StatusBar backgroundColor="#f8f8f8" barStyle="dark-content" />

      <ImageBackground source={Images.loginBg} style={styles.imgBg}>
        <View style={styles.logoContainer}>
          <Image source={Images.logo} style={styles.logo} />
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.largeTxt}>Welcome,</Text>
          <Text style={styles.subTxt}>Please login to your account</Text>
        </View>
      </ImageBackground>

      <View style={styles.formContainer}>
        <InputComp
          noSign={true}
          required={true}
          label="Username"
          placeholder="Enter Username"
        />
        <InputComp
          noSign={true}
          secureTextEntry={!isVisible}
          required={true}
          label="Password"
          placeholder="Enter Password"
           RightSide={
            <TouchableOpacity
              onPress={() => setVisible(!isVisible)}
              style={styles.eyebox}>
              <Ionicons
                name={isVisible ? 'eye-off' : 'eye'}
                size={20}
                color= {Colors.primary}
              />
            </TouchableOpacity>
          }
        />
        
        <View style={styles.frgtPassContainer}>
            <Text style={styles.frgtPassTxt}>Forgot Password?</Text>
        </View>
        

        <PrimaryButton title="SUBMIT" onPress={() => {}} />
      </View>
    </View>
  );
};

export default LoginContainer;

const styles = StyleSheet.create({
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logo: {
    height: 40,
    width: 100,
    resizeMode: 'contain',
    marginLeft: 40,
    marginTop: 10,
  },
  imgBg: {
    flex: 1,
    resizeMode: 'cover',
    flexDirection: 'column-reverse',
  },
  formContainer: {
    flex: 1,
    elevation: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: Colors.primary,
    padding: 15,
    paddingTop:30
  },
  txtContainer: {
    margin: 10,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 10,
  },
  largeTxt: {
    fontSize: 30,
    color: Colors.primary,
  },
  subTxt: {
    fontSize: 20,
    color: Colors.primary,
  },
   eyebox : {
        height : 40,
        width : 40,
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : -5
    },
    frgtPassContainer : {
        flexDirection : 'row-reverse',
        alignItems : 'center',
        marginTop: -10,
        marginHorizontal : 20
    },
    frgtPassTxt : {
        fontSize : 12,
        color : Colors.error,
        textAlign : 'right',

    }
});
