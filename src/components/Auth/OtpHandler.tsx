import React, { useState } from 'react';

const OtpHandler = ({otpSent, setOtpSent}: {otpSent:boolean, setOtpSent: (value: boolean) => void}) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);

  const handleOtpChange = (event:any) => {
    setOtp(event.target.value);
  };

  const handleOtpSubmit = (event:any) => {
    event.preventDefault();
    // TO DO: Implement OTP verification logic here
    console.log('OTP submitted:', otp);
  };

  const handleResendOtp = () => {
    // TO DO: Implement resend OTP logic here
    console.log('Resend OTP clicked');
  };

  return (
    <div>
      {otpSent ? (
        <div>
          <input
            type="number"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleOtpChange}
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
          <button
            className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            onClick={handleOtpSubmit}
          >
            Verify OTP
          </button>
          <p className="mt-2 text-xs text-gray-600 text-center">
            Didn't receive any code?{' '}
            <button
              className="text-[#00A674] font-bold"
              onClick={handleResendOtp}
            >
              Try again
            </button>
          </p>
        </div>
      ) : (
        <button
          className="tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          onClick={() => setOtpSent(true)}
        >
          Send OTP
        </button>
      )}
    </div>
  );
};

export default OtpHandler;