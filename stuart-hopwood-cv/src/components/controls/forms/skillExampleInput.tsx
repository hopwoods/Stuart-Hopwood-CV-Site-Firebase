/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { TextField } from "@material-ui/core";
import React from "react";
import { useSkillsStore } from "../../../state";
import { DeleteSkillButton } from "../buttons/deleteSkillButton";

type SkillExampleInputProps = {
    text: string;
    index: number;
}

const textInput = css`
    width: 85%;
`;

const deleteButton = css`
    display: inline-block;
    position: relative;
    top: 1.5rem;
`;

export function SkillExampleInput({ text, index }: SkillExampleInputProps) {

    const { selectedSkillExamples, setCurrentSkillExamples } = useSkillsStore();
    const onDeleteExampleClickHandler = (e: React.MouseEvent<HTMLButtonElement>, text: string) => {
        e.preventDefault();
        if (selectedSkillExamples) {
            const examplesCopy = [...selectedSkillExamples];
            const found = examplesCopy.findIndex(x => x.text === text)
            if (found !== -1) {
                setCurrentSkillExamples(examplesCopy.filter(x => x.text !== text));
            }
        }
    }

    return (
        <div>
            <TextField
                css={textInput}
                name="skillExamples"
                key={index} margin="dense"
                id={`skillExample-${index}`}
                label="Skill Example"
                type="text"
                defaultValue={text}
                placeholder="Enter an example..."
            />
            <DeleteSkillButton cssStyle={deleteButton} color="secondary" size="small" onClickHandler={(e: React.MouseEvent<HTMLButtonElement>) => onDeleteExampleClickHandler(e, text)} />
        </div>
    )
}
