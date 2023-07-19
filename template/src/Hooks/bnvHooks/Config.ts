import { AuthSendOtp, confirmOtp } from '@/ApiServices'
import { handleSuccess as successHandler } from '@/Utils/generalFunctions'

//This config file is an interface for all the hooks in the bnvHooks folder and throught this interface only
// the hooks will be used in the app. This is done to avoid the use of the same hook in multiple places

export const handleSuccess = successHandler

export const SEND_AUTH_OTP = AuthSendOtp
export const VERIFY_AUTH_OTP = confirmOtp