/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { style } from "./profile.css";
import { mediaQueries } from "../../../style";
import { Email, PhoneNumber, Location, GithubRepo } from "../../controls";
import { Picture } from "react-responsive-picture";
import { Fade, Bounce } from "react-reveal";
import ProfilePicture200 from "../../../assets/ProfilePicture-200.png";
import ProfilePicture300 from "../../../assets/ProfilePicture-300.png";
import ProfilePicture400 from "../../../assets/ProfilePicture-400.png";
import { AboutText, SocialIcons } from "..";

export function Profile() {
  return (
    <Fade left big>
      <div css={style}>
        <div className="profilePicture">
          <Picture
            sources={[
              {
                srcSet: ProfilePicture200,
                media: mediaQueries.small,
              },
              {
                srcSet: ProfilePicture300,
                media: mediaQueries.medium,
              },
              {
                srcSet: ProfilePicture300,
                media: mediaQueries.large,
              },
              {
                srcSet: ProfilePicture400,
                media: mediaQueries.xlarge,
              },
              {
                srcSet: ProfilePicture400,
                media: mediaQueries.xxlarge,
              },
            ]}
          />
        </div>
        <h2>Hi, I'm Stuart Hopwood</h2>
        <AboutText />
        <PhoneNumber />
        <Email />
        <Location />
        <GithubRepo />
        <Bounce>
          <SocialIcons />
        </Bounce>
      </div>
    </Fade>
  );
};
