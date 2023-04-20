import { useState } from "react";
import { SEND_AUTH_OTP } from "./Config";
import usePost from "./usePost";
import { showToast } from "@/Utils";

const useOtpAuth = () =>{
    //will handle phone number verification
    const [otp, setOtp] = useState('');

    const otpMutation = usePost((data : any) =>  SEND_AUTH_OTP(data))

    const sendOtp = ( ) =>{
        showToast('Sending OTP', 'info')
        // alert('Sending OTP')
        otpMutation.mutate({phone: '+919582852710'})
    }

    return{
        otp,
        sendOtp
    }
}

export default useOtpAuth;