import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleLoginButton = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        console.log("User Info:", decoded);
        // You can now send this token to your backend for verification
      }}
      onError={() => {
        console.log("Login Failed");
      }}
      redirectUri="http://localhost:5174"
    />
  );
};

export default GoogleLoginButton;
