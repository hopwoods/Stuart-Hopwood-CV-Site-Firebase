/** @jsxImportSource @emotion/react */
import React from "react";
import { jsx } from "@emotion/react";
import { Page } from "../components/layout";
import { LoginButton } from "../components/controls";
import { style } from "./login.css";
import { Link } from "react-router-dom";

//TODO: Change to Function from FC.
const Banner: React.FC = () => {
  return (
    <h1 className="inverse">Login</h1>
  );
};

function Login() {
  return (
    <React.Fragment>
      <Page id="Login" fullscreen={false} BannerContent={Banner}>
        <div css={style}>
          <h2>So...You want to login huh?</h2>
          <p>
            Well that is nice of you, if you are Stuart Hopwood, go ahead and
            click login and start updating that CV.
            <br />
            If not, this probably isn't where you should be. Perhap you should
            head to the{" "}
            <Link className="link" to="/home">
              Home page
            </Link>{" "}
            and read what I can do.
          </p>
          <LoginButton />
        </div>
      </Page>
    </React.Fragment>
  );
}

export default Login;
