import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@/Hooks';
import {
  BlurLayout,
  Brand,
  CText,
  DefaultCard,
  DefaultPattern,
  GradientCard,
  InputComp,
  PrimaryButton,
  VGap,
} from '@/Components';
import {Colors, MetricsSizes} from '@/Theme/Variables';
import DefaultHeaderBg from '@/Components/Common/DefaultHeaderBg';
import { Strings } from '@/Assets/res';

type Props = {
  onPhoneChange?: (phone: string) => void;
  loading?: boolean;
  onLogin?: () => void;
  phone?: string;
};

const {SMALL, LARGE, REGULAR} = MetricsSizes;

const SendOtpFragment = ({onPhoneChange, onLogin, loading, phone}: Props) => {
  const {Layout, Colors, MetricsSizes, Images} = useTheme();
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
            <Brand />
          </View>
          <CText as="pmdMed" color={Colors.PRIMARY} align="left">
            Sign In 
          </CText> 

          <InputComp
            color={Colors.WHITE}
            onChangeText={onPhoneChange}
            value={phone}
            // parentStyle={{ backgroundColor: Colors.WHITE, }}
            LeftComp={
              <CText
                as="pmdMed"
                color={Colors.PRIMARY}
                align="center"
                style={[{padding: MetricsSizes.SMALL}]}>
                {Strings.COUNTRY_PHONE_CODE}
              </CText>
            }
            keyboardType="phone-pad"
            maxLength={10}
            placeholder="Enter Your Phone Number"
          />
          <CText align="center" color={Colors.PRIMARY}>
            A verification code will be sent to this phone number.{' '}
          </CText>
          <VGap gap={MetricsSizes.XXLARGE} />
          <PrimaryButton loading={loading} title="Continue" onPress={onLogin} />
        </View>
      </DefaultCard>
    </View>
  );
};

export default SendOtpFragment;

const styles = StyleSheet.create({
  blurContainer: {
    margin: MetricsSizes.REGULAR,
    marginVertical: MetricsSizes.LARGE * 3,
    flex: 1,
  },
});
