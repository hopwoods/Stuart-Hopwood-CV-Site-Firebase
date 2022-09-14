/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { style } from "./badges.css";
import { Flip } from "react-reveal";

export const Badges: React.FC = () => {
  return (
    <article id="badges" css={style}>
      <Flip left cascade>
        <div>Badge 1</div>

        <div>Badge 2</div>

        <div>Badge 3</div>

        <div>Badge 4</div>
      </Flip>
    </article>
  );
};
