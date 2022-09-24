import { TextField } from '@mui/material'
import { useFirestore } from '../../../firebase/usefirestore'
import { useSkillsStore } from '../../../state'
import { SkillExampleProps } from '../../../types'
import { DeleteButton } from '../buttons/deleteButton'
import { classes } from './skillExampleInput.css'

export function SkillExampleInput({ skillExample: example }: { skillExample: SkillExampleProps }) {

	const { makeId } = useFirestore()
	const { removeSkillExample } = useSkillsStore()
	const id = example.id ? example.id : makeId(20)
	const { selectedSkill } = useSkillsStore()


	const onDeleteExampleClickHandler = (id: string) => {
		if (selectedSkill.id && selectedSkill.skillExamples) {
			removeSkillExample(id)
		}
	}

	return (
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
	)
}



