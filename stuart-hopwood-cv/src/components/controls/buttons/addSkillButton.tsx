import { Button } from "@mui/material"
import { FaPlusCircle } from "react-icons/fa"
import { useSkillsStore } from "../../../state"
import { AddSkillButtonProps, SkillProps } from "../../../types"
export function AddSkillButton({ color, size }: AddSkillButtonProps) {

    const { maxId, setAddDialogState, setCurrentSkill, selectedSkillId } = useSkillsStore()

    const onClickHandler = async () => {
        // 1. Get The MaxId
        console.log(`1. maxId State value: ${maxId}`)
        // 2. Set the newId
        const newId = maxId + 1
        console.log(`2. newId value: ${newId}`)
        //3. Assign new skill the new id
        const newSkill: SkillProps = {
            id: newId,
            skillName: "",
            percentage: 0,
            skillExamples: undefined
        }
        // 4. Set Current Skill Values
        setCurrentSkill(newSkill)
        console.log(`3. New current skill id: ${selectedSkillId}`)
        setAddDialogState(true)
    }


    return (
        <Button color={color} size={size} aria-label="Edit Skill" variant="contained" onClick={() => onClickHandler()} startIcon={<FaPlusCircle />}>
            Add Skill
        </Button>
    )
}