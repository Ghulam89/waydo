import React, { useState } from "react";
import otpImg from '../../assets/images/icons/otp.png';
import { Modal } from "./Modal";

export default function PhoneOtp({isOpen,Close}) {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Move to next input
    if (value && index < 3) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  return (
    <Modal  className="max-w-md h-[520px] p-5 rounded-xl" isOpen={isOpen}   onClose={Close}>
      <div className="max-w-sm mx-auto rounded-lg text-center">
        {/* OTP Icon */}
        <div className="flex justify-center mb-4">
          <img src={otpImg} alt="" />
        </div>

        <h2 className="text-lg font-semibold text-gray-900">An OTP is on the way</h2>
        <p className="text-sm text-gray-600  pb-1 mt-2">
          We sent a verification code to
        </p>

        <span className="text-primary-600  text-sm font-medium">+971 525554980</span>

         <p className="text-sm text-gray-600">
          We sent a verification code to
        </p>

        {/* OTP Input Boxes */}
        <div className="flex justify-center gap-2 mt-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              className="w-14 h-14 text-3xl text-gray-50 text-center border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          ))}
        </div>

         <p className="text-sm  pt-2 text-gray-600">
           Didn't receive a code yet?
        </p>
        {/* Options */}
        <div className="mt-2 space-y-2">
          <button className="text-sm text-red-600 hover:underline">Resend code</button>
          <div>
            <button className="text-sm text-red-600 hover:underline">Receive a phone call instead</button>
          </div>
        </div>

        

        {/* Footer Buttons */}
        <div className="mt-2 flex items-center gap-3">
          <button className="flex-1 rounded-md border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button className="flex-1 rounded-md bg-black text-white py-2 text-sm font-medium hover:bg-gray-900">
            Verify
          </button>
        </div>

        {/* Support Link */}
        <div className="mt-2">
          <a href="#" className="text-xs text-blue-500 hover:underline">
            Contact Customer Support.
          </a>
        </div>
        
      </div>
    </Modal>
  );
}
