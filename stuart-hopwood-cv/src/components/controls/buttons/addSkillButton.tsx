import { Button } from '@mui/material'
import { FaPlusCircle } from 'react-icons/fa'
import { useSkillsStore } from '../../../state'
import { AddSkillButtonProps, SkillProps } from '../../../types'
export function AddSkillButton({ color, size }: AddSkillButtonProps) {

	const { setAddDialogState, setCurrentSkill } = useSkillsStore()

	const onClickHandler = async () => {
		const newSkill: SkillProps = {
			skillName: '',
			percentage: 0,
			skillExamples: undefined
		}
		setCurrentSkill(newSkill)
		setAddDialogState(true)
	}

	return (
		<Button color={color} size={size} aria-label="Edit Skill" variant="contained" onClick={async () => await onClickHandler()} startIcon={<FaPlusCircle />}>
			Add Skill
		</Button>
	)
}