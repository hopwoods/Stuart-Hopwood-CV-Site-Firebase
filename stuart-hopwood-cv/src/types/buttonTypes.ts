import { SerializedStyles } from "@emotion/react";
import { SkillProps } from ".";

export type ButtonColors = "primary" | "secondary";
export type ButtonSizes = "small" | "medium";

export type EditSkillButtonProps = SkillProps & {
    color: ButtonColors;
    size: ButtonSizes;
}

export type DeleteSkillButtonProps = {
    color: ButtonColors;
    size: ButtonSizes;
    onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
    cssStyle?: string;
}

export type AddSkillButtonProps = {
    color: ButtonColors;
    size: ButtonSizes;
    cssStyle?: string;
}