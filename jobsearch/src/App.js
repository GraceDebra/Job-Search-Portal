import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage';
import SignIn from './components/Account/SignIn';
import SignUp from './components/Account/SignUp';
import ForgotPassword from './components/Account/PasswordCards/ForgotPassword';
import VerifyEmailForm from './components/Account/PasswordCards/EmailVerificationCard';
import ResetPasswordCard from './components/Account/PasswordCards/ResetPasswordCard';
import Home from './pages/Home';
import Onboarding from './pages/Dashboard/Onboarding';
import { AuthProvider } from './utils/AuthContext';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import PrivateRoute from './Routes/PrivateRoute';
import { Navigate } from 'react-router-dom';
const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <>
      <Router>
        <AuthProvider value={{ currentUser }}>
          <Routes>
            <Route path="/verifyemail" element={<VerifyEmailForm />} />
            <Route
              exact
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                !currentUser?.emailVerified ? (
                  <SignIn />
                ) : (
                  <Navigate to="/home" replace />
                )
              }
            />
            <Route
              path="/register"
              element={
                !currentUser?.emailVerified ? (
                  <SignUp />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route index element={<LandingPage />} />
            {/*<Route path="/login" element={<SignIn />} />*/}
            {/*<Route path="/register" element={<SignUp />} />*/}
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword" element={<ResetPasswordCard />} />

            {/*<Route path="/home" element={<Home/>}/>*/}
            <Route path="/onboarding" element={<Onboarding />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
