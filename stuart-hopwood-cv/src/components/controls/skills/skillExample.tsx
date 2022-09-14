/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import React from "react";
import { example } from "./skillExample.css";

type SkillExample = {
    id: number;
    text: string
}

export function SkillExample({ id, text }: SkillExample) {
    return (
        <React.Fragment>
            <p css={example} key={id}>{text}</p>
        </React.Fragment>
    );
};
