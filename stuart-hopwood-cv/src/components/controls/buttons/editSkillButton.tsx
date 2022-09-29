import IconButton from '@mui/material/IconButton'
import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { useAppStore } from '../../../state/appStore'
import { EditSkillButtonProps, SkillProps } from '../../../types'

//const IconButton = React.lazy(() => import('@mui/material/IconButton'))
export default function EditSkillButton({ id, skillName, skillExamples, percentage, color, size }: EditSkillButtonProps) {

	const { setCurrentSkill, setEditDialogState } = useAppStore()
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

	return <IconButton color={color} size={size} aria-label="Edit Skill" onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClickHandler(e)}>
		<FaPencilAlt />
	</IconButton>
}