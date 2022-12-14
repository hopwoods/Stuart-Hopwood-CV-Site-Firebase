import { TextField } from '@mui/material'
import { useFirestore } from '../../../Hooks/firebase/usefirestore'
import { useAppStore } from '../../../state/appStore'
import { SkillExampleProps } from '../../../types'
import DeleteButton from '../buttons/deleteButton'
import { classes } from './skillExampleInput.css'

export default function SkillExampleInput({ skillExample: example }: { skillExample: SkillExampleProps }) {

	const { makeId } = useFirestore()
	const { selectedSkill, removeSkillExample } = useAppStore()
	const id = example.id ? example.id : makeId()

	const onDeleteExampleClickHandler = (id: string) => {
		if (selectedSkill.id && selectedSkill.skillExamples) {
			removeSkillExample(id)
		}
	}

	return <div>
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
		<DeleteButton className={classes.deleteButton} size='sm' onClickHandler={() => onDeleteExampleClickHandler(id)} />
	</div>
}



