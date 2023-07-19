import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SendOtpFragment, VerifyOtpFragment } from '@/Fragments';
import { useMutation } from '@tanstack/react-query';
import { AuthSendOtp, confirmOtp } from '@/ApiServices';
import { PrimaryButton, VGap } from '@/Components';
import {usePost} from '@/Hooks';
import { PhoneAuthPayload } from '@/ApiServices/interfaces';
import { Strings } from '@/Assets/res';
import { useDispatch } from 'react-redux';
import { loginReducer } from '@/Store/Auth';
import { showToast } from '@/Utils';

type Props = {};

const LoginContainer = ({ }: Props) => {
  const dispatch = useDispatch();
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>('');
  const [otp, setOtp] = useState<string>('');

  const {
    data: otpResponse,
    isLoading: loadingSentOtp,
    mutate: mutateSendOtp,
  } = usePost(() => AuthSendOtp({ phone: Strings.COUNTRY_PHONE_CODE + phone }));

  const {
    data: otpVerifyResponse,
    isLoading: loadingVerifyOtp,
    mutate: mutateVerifyOtp,
  } = usePost(() =>
    confirmOtp({
      phone: Strings.COUNTRY_PHONE_CODE + phone,
      otp,
    }),
  );

  useEffect(() => {
    console.log('otpResponse', otpResponse)
    if (otpResponse) {
      let { success, message } = otpResponse;
      if (success && message) {
        setOtpSent(true);
       showToast(message, 'success');
      }
    }
  }, [otpResponse]);

  useEffect(() => {
    if (otpVerifyResponse) {
      let { success, message, error, access_token } = otpVerifyResponse || {};
      if (access_token) {
        dispatch(loginReducer(otpVerifyResponse));
      } else {
        showToast(message || error, 'error');
      }
    }
  }, [dispatch, otpVerifyResponse]);

  return (
    <>
      {otpSent ? (
        <VerifyOtpFragment
          phoneNumber={phone}
          otp={otp}
          onOtpChange={setOtp}
          onVerify={mutateVerifyOtp}
          loading={loadingVerifyOtp}
          resendCode={mutateSendOtp}
          resendingOtp={loadingSentOtp}
          changePhone={() => setOtpSent(false)}
        />
      ) : (
        <SendOtpFragment
          onPhoneChange={setPhone}
          phone={phone}
          loading={loadingSentOtp}
          onLogin={mutateSendOtp}
        />
      )}
    </>
  );
};

export default LoginContainer;

const styles = StyleSheet.create({});
