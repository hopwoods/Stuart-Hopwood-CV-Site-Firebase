//import { Button } from '@mui/material'
import { useAppStore } from '../../../state/appStore'
import { SkillButtonProps, SkillProps } from '../../../types'
import Button from './button'


export default function AddSkillButton({ size }: SkillButtonProps) {

	const { setAddDialogState, setCurrentSkill } = useAppStore()

	const onClickHandler = async () => {
		const newSkill: SkillProps = {
			skillName: '',
			percentage: 0,
			skillExamples: undefined
		}
		setCurrentSkill(newSkill)
		setAddDialogState(true)
	}

	return <Button aria-label="Edit Skill" onClick={async () => await onClickHandler()} size={size}>
		Add Skill
	</Button>
}