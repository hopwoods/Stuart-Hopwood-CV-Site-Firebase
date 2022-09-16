import { IconButton } from "@mui/material";
import { FaTrashAlt } from "react-icons/fa";
import { DeleteSkillButtonProps } from "../../../types";

export function DeleteSkillButton({ color, size, onClickHandler, cssStyle }: DeleteSkillButtonProps) {
    return (
        <IconButton className={cssStyle} color={color} size={size} aria-label="Edit Skill" onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClickHandler(e)}>
            <FaTrashAlt />
        </IconButton>
    );
};