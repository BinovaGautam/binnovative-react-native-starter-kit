import {Colors, FontFamily, FontSize} from '@/Theme/Variables';
import {ReactNode} from 'react';

export const getInitials = (name: string) => {
  const names = name.split(' ');
  const initials = names[0].substring(0, 1).toUpperCase();
  return initials;
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
