export interface PhoneAuthPayload {
  phone: string;
  referralCode?: string;
}

export interface OtpVerifyPayload {
  phone: string;
  otp: string;
}
