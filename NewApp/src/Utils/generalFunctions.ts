import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {ReactNode} from 'react';
// import Toast from 'react-native-toast-notifications';

export const getInitials = (name: string) => {
  const names = name.split(' ');
  const initials = names[0].substring(0, 1).toUpperCase();
  return initials;
};

export const handleSuccess = (response: any) => {
  try {
    console.log('BASE RESPONSE FROM BEFORE HANDLE SUCCESS ');
    let {msg, status, data} = response || {};

    if (!!msg && Object.keys(response)?.length === 1) {
      //for auth routes only response looks like : {msg : 'otp sent to xxxxxx'}
      return {success: true, message: msg};
    }

    // success case for app APIs
    if (!!status && status === 'success') {
      return {success: true, data: data || {}};
    }

    // success case for lean APIs
    if (!!status && status === 200) {
      return {success: true, data: data || {}};
    }
    
    return response;
  } catch (e) {
    console.log('BASE ERROR FROM HANDLE SUCCESS', e, response);
    return {success: false, message: 'Something went wrong', error: e};
  }
};

export const getAlertObj = (
  variant: string,
  title: string,
  message?: ReactNode,
  custom?: any,
  disabledClose?: boolean,
) => {
  return {
    show: true,
    variant,
    disabledClose,
    extraProps: {
      title,
      message,
      ...custom,
    },
  };
};

export const validateEmail = (email: string) => {
  const res =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
};

export const validatePhone = (email: string) => {
  const res = /^[6-9]\d{9,14}$/;
  return res.test(String(email).toLowerCase());
};

export const showToast = (message: string, type: string) => {
  toast.hideAll();
  toast.show(message, {
    type: type,
    placement: 'bottom',
    animationType: 'slide-in',
    style: {
      marginBottom: 20,
      backgroundColor: type == 'success' ? Colors.success : Colors.error,
    },
    textStyle: {
      color: Colors.white,
      fontSize: FontSize.base,
      fontFamily: FontFamily.REGULAR,
      textAlign: 'center',
      marginHorizontal: 10,
    },
    animationDuration: 400,
    duration: 2000,
  });
};
