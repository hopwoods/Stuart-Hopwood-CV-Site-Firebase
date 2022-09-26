import React, { Suspense } from 'react'
import { useFirestore } from '../../../firebase/usefirestore'
import { useSkillsStore } from '../../../state'
import { SkillExampleProps } from '../../../types'
import { classes } from './skillExampleInput.css'

const TextField = React.lazy(() => import('@mui/material/TextField'))
const DeleteButton = React.lazy(() => import('../buttons/deleteButton'))

export default function SkillExampleInput({ skillExample: example }: { skillExample: SkillExampleProps }) {

	const { makeId } = useFirestore()
	const { removeSkillExample } = useSkillsStore()
	const id = example.id ? example.id : makeId(20)
	const { selectedSkill } = useSkillsStore()

	const onDeleteExampleClickHandler = (id: string) => {
		if (selectedSkill.id && selectedSkill.skillExamples) {
			removeSkillExample(id)
		}
	}

	return <Suspense>
		<div>
			<TextField
				className={`${classes.textInput} skillExample`}
				name="skillExamples"
				key={id} margin="dense"
				id={id}
				label="Skill Example"
				type="text"
				defaultValue={example.text}
				placeholder="Enter an example..."
			/>
			<DeleteButton cssStyle={classes.deleteButton} color="primary" size="small" onClickHandler={() => onDeleteExampleClickHandler(id)} />
		</div>
	</Suspense>
}



