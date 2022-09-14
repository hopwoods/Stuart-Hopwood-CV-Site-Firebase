import React from "react";
import { IconButton } from "@material-ui/core";
import { SkillProps } from "../../../types";
import { useSkillsStore } from "../../../state";
import { FaPencilAlt } from "react-icons/fa";
import { EditSkillButtonProps } from "../../../types";
export function EditSkillButton({ id, skillName, skillExamples, percentage, color, size }: EditSkillButtonProps) {

    const { setCurrentSkill, setEditDialogState } = useSkillsStore();
    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const selectedSkill: SkillProps = {
            id: id,
            skillName: skillName,
            percentage: percentage,
            skillExamples: skillExamples
        };
        setCurrentSkill(selectedSkill);
        setEditDialogState(true);
    }

    return (
        <IconButton color={color} size={size} aria-label="Edit Skill" onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClickHandler(e)}>
            <FaPencilAlt />
        </IconButton>
    );
};