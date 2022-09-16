import { Picture } from "react-responsive-picture";
import { Bounce, Fade } from "react-reveal";
import { AboutText, SocialIcons } from "..";
import ProfilePicture200 from "../../../assets/ProfilePicture-200.png";
import ProfilePicture300 from "../../../assets/ProfilePicture-300.png";
import ProfilePicture400 from "../../../assets/ProfilePicture-400.png";
import { mediaQueries } from "../../../style";
import { Email, GithubRepo, Location, PhoneNumber } from "../../controls";
import { classes } from "./profile.css";

export function Profile() {
  return (
    <Fade left big>
      <div className={classes.profile}>
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
