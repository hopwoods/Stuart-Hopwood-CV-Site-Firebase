import React from "react";
import { classes } from "./skillExample.css";

type SkillExample = {
    id: number;
    text: string
}

export function SkillExample({ id, text }: SkillExample) {
    return (
        <React.Fragment>
            <p className={classes.skillExample} key={id}>{text}</p>
        </React.Fragment>
    );
};
