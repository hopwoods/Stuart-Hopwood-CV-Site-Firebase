/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { IconButton } from "@material-ui/core";
import { FaTrashAlt } from "react-icons/fa";
import { DeleteSkillButtonProps } from "../../../types";

export function DeleteSkillButton({ color, size, onClickHandler, cssStyle }: DeleteSkillButtonProps) {
    return (
        <IconButton css={cssStyle} color={color} size={size} aria-label="Edit Skill" onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClickHandler(e)}>
            <FaTrashAlt />
        </IconButton>
    );
};