import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../App";
import "./login.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function Login() {
  const Auth = useAuth();

  let navigate = useNavigate();
  const googleHandler = async () => {
    provider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        JSON.stringify(user);
        sessionStorage.setItem("token", "New user");
        sessionStorage.setItem("credential", JSON.stringify({"user":"new user"}));
        sessionStorage.setItem("user", JSON.stringify({"user":"new user"}));
        Auth.setUser(user);
        navigate("/", { replace: true });
        return { user };
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, email, credential, errorMessage);
      });
  };
  const login = () => {
    // googleHandler();
    sessionStorage.setItem("token", "New user");
    sessionStorage.setItem("credential", JSON.stringify({"user":"new user"}));
    sessionStorage.setItem("user", JSON.stringify({"user":"new user"}));
    Auth.setUser({"user":"new user"});
    navigate("/", { replace: true });
  };
  return (
    <div className="login">
      <div className="logincta">
        <img alt="disney" src="/images/cta-logo-one.svg" />
        <div
          onClick={() => {
            login();
          }}
        >
          get all there
        </div>
        <p>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </p>
        <img alt="disney" className="logo3" src="/images/cta-logo-two.png" />
      </div>
    </div>
  );
}
