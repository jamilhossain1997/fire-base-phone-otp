import React, { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase";

function PhoneAuth() {
  const [phone, setphone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");

  const sendOtp = async () => {
    try {
    //   const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone);
      setUser(confirmation);
    } catch (err) {
      console.error(err);
    }
  };

  const verfiyOtp = async () => {
    try {
      await user.confirm(otp);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <PhoneInput
        country={"bd"}
        value={phone}
        onChange={(phone) => setphone("+" + phone)}
      />

      <div id="recaptcha"></div>
      <button onClick={sendOtp}>SEND OTP</button> <br />
      <br />
      <input onChange={(e) => setOtp(e.target.value)} />
      <button onClick={verfiyOtp}>verfiy Otp</button>
    </div>
  );
}

export default PhoneAuth;
