import React from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage';
import SignIn from './components/Account/SignIn';
import SignUp from './components/Account/SignUp';
import ForgotPassword from './components/Account/PasswordCards/ForgotPassword';
import VerifyEmailForm from './components/Account/PasswordCards/EmailVerificationCard';
import ResetPasswordCard from './components/Account/PasswordCards/ResetPasswordCard';

const  App=()=> {
  return (
    <>
    <Routes>
       <Route index element={<LandingPage />} />
       <Route path="/login" element={<SignIn />} />
       <Route path="/register" element={<SignUp />} />
       <Route path="/forgotpassword" element={<ForgotPassword />} />
       <Route path="/resetpassword" element={<ResetPasswordCard />} />
       <Route path="/verifyemail" element={<VerifyEmailForm />} />
    </Routes>
 </>
  );
}

export default App;
