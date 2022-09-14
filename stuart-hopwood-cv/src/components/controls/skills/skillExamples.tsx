/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import React from "react";
import { SkillExampleProps } from "../../../types";
import { SkillExample } from "./skillExample";

type SkillExamplesProps = {
    examples?: SkillExampleProps[];
}

export function SkillExamples({ examples }: SkillExamplesProps) {
    return (
        <React.Fragment>
            {examples
                ? examples.map(function (example, idx) {
                    return <SkillExample key={idx} id={idx} text={example.text} />
                })
                : null}
        </React.Fragment>
    );
};