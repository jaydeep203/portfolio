import React from 'react';
import LoginComp from '../../components/LoginComp';

const page = () => {
  return (
    <div className="login">
      <div className="loginContainer">

        <LoginComp />

      </div>
    </div>
  )
}

export default page

export const metadata = {
  title: 'Login',
  description: 'Login Page for Portfolio App.'
}
