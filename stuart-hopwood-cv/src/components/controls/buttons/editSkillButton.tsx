import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { useAppStore } from '../../../state/appStore'
import { SkillProps } from '../../../types'
import Button from './button'

export default function EditSkillButton({ id, skillName, skillExamples, percentage }: SkillProps) {

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

	return <Button size='sm' aria-label="Edit Skill" onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClickHandler(e)}>
		<FaPencilAlt />
	</Button>
}