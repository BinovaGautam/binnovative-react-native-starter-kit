/* eslint-disable react-native/no-inline-styles */
import {Image, Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, { useCallback, useEffect } from 'react';
import {useTheme} from '@/Hooks';
import {
  Brand,
  CText,
  DefaultCard,
  DefaultPattern,
  InputComp,
  MinimalButton,
  PrimaryButton,
  VGap,
} from '@/Components';
import {Colors, MetricsSizes} from '@/Theme/Variables';
import DefaultHeaderBg from '@/Components/Common/DefaultHeaderBg';
import ImgBadge from '@/Components/Common/ImgBadge';

const OTP_TIMER = 60;

type Props = {
  phoneNumber: string;
  onVerify?: () => void;
  loading?: boolean;
  otp?: string;
  onOtpChange?: (value: string) => void;
  resendingOtp?: boolean;
  resendCode ?: () => void;
  changePhone ?: () => void;
};

const {SMALL, LARGE, REGULAR} = MetricsSizes;

const VerifyOtpFragment = ({
  phoneNumber,
  onVerify,
  otp,
  loading,
  onOtpChange,
  resendingOtp ,
  resendCode,
  changePhone
}: Props) => {
  const {Layout, Colors, MetricsSizes, Images} = useTheme();
  const [timer, setTimer] = React.useState(OTP_TIMER);

  const timeOutCallback = useCallback(
    () => setTimer((currTimer: number) => currTimer - 1),
    [],
  );

  useEffect(() => {
    (timer > 0) && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);

  useEffect(() => {
    if (timer === 0 && !resendingOtp) {
      setTimer(OTP_TIMER);
    }
  }, [resendingOtp]);

  return (
    <View style={[Layout.fill, {padding: 5}]}>
      <StatusBar animated
        backgroundColor={Colors.primary}
        hidden
        barStyle="dark-content"
      />

      <DefaultPattern />
      <DefaultCard
        gradientColors={Colors.GRADIENT_LIGHT}
        containerStyle={styles.blurContainer}>
        <View
          style={[
            Layout.fill,
            Layout.justifyContentCenter,
            {padding: MetricsSizes.REGULAR},
          ]}>
          <View style={[Layout.colVCenter]}>
            {/* <ImgBadge image={Images.otpCode} /> */}
            <VGap />
          </View>

          <InputComp
            style={{
              letterSpacing: MetricsSizes.XLARGE,
              textAlign: 'center',
              backgroundColor: '#fff',
            }}
            value={otp}
            onChangeText={onOtpChange}
            keyboardType="phone-pad"
            maxLength={6}
            placeholder="******"
          />
          <VGap gap={MetricsSizes.TINY} />
          <CText align="center">
            {' '}
            A 6 digit verification code was sent to {phoneNumber}{', '}
            {/* <MinimalButton outline title="Change?" Color={Colors.RED_1} /> */}
            <Pressable onPress={changePhone}>
              <CText as="pMed" color={Colors.PRIMARY} >Change?</CText>
            </Pressable>
          </CText>

          <VGap gap={MetricsSizes.REGULAR} />
          <View style={[Layout.row, Layout.justifyContentCenter]}>
            <CText as="pMed" color={Colors.font} align="center">
              Didn't receive the code?
            </CText>
            {timer > 0 ? (
              <CText as="pMed" color={Colors.PRIMARY} align="left">
                Resend in 00:{timer > 9 ? String(timer) : '0' + timer}{' '}
              </CText>
            ) : (
              <Pressable onPress={resendCode}>
                  <CText as="pMed" color={Colors.RED_1} > {resendingOtp ? "Re Sending ..." : "Resend?"} </CText>
              </Pressable>

            )}
          </View>
          <VGap gap={MetricsSizes.XXLARGE} />
          <PrimaryButton disabled={resendingOtp} loading={loading} title="Verify" onPress={onVerify} />
        </View>
      </DefaultCard>
    </View>
  );
};

export default VerifyOtpFragment;

const styles = StyleSheet.create({
  blurContainer: {
    margin: MetricsSizes.REGULAR,
    marginVertical: MetricsSizes.LARGE * 3,
    flex: 1,
    // backgroundColor: Colors.TRANSLUCENT_WHITE,
  },
});
