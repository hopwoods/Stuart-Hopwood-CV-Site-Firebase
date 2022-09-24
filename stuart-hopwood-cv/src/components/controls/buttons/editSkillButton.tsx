import { IconButton } from '@mui/material'
import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { useSkillsStore } from '../../../state'
import { EditSkillButtonProps, SkillProps } from '../../../types'
export function EditSkillButton({ id, skillName, skillExamples, percentage, color, size }: EditSkillButtonProps) {

	const { setCurrentSkill, setEditDialogState } = useSkillsStore()
	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		const selectedSkill: SkillProps = {
			id: id,
			skillName: skillName,
			percentage: percentage,
			skillExamples: skillExamples
		}
		setCurrentSkill(selectedSkill)
		setEditDialogState(true)
	}

	return (
		<IconButton color={color} size={size} aria-label="Edit Skill" onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClickHandler(e)}>
			<FaPencilAlt />
		</IconButton>
	)
}