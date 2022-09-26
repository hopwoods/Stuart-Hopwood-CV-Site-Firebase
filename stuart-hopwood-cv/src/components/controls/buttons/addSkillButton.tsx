//import { Button } from '@mui/material'
import React, { Suspense } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { useSkillsStore } from '../../../state'
import { AddSkillButtonProps, SkillProps } from '../../../types'

const Button = React.lazy(() => import('@mui/material/Button'))

export default function AddSkillButton({ color, size }: AddSkillButtonProps) {

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

	return <Suspense>
		<Button color={color} size={size} aria-label="Edit Skill" variant="contained" onClick={async () => await onClickHandler()} startIcon={<FaPlusCircle />}>
			Add Skill
		</Button>
	</Suspense>
}