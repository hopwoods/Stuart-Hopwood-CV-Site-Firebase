import {
  FacebookLink,
  GithubLink,
  InstagramLink,
  LinkedInLink
} from "../../controls";
import { classes } from "./socialIcons.css";

export const SocialIcons: React.FC = () => {
  return (
    <div className={`socialIcons ${classes.socialIcons}`}>
      <FacebookLink color="primary" size="medium" />
      <GithubLink color="primary" size="medium" />
      <LinkedInLink color="primary" size="medium" />
      <InstagramLink color="primary" size="medium" />
    </div>
  );
};
