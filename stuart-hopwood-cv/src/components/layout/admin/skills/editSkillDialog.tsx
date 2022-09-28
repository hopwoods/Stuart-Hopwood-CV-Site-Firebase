import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useRef } from 'react'
import { BiCommentAdd } from 'react-icons/bi'
import { useSkillDialog } from '../../../../Hooks'
import { useSkillsStore } from '../../../../state/skillsStore'
import { SkillExampleProps } from '../../../../types'

// const Button = React.lazy(() => import('@mui/material/Button'))
// const Dialog = React.lazy(() => import('@mui/material/Dialog'))
// const DialogActions = React.lazy(() => import('@mui/material/DialogActions'))
// const DialogContent = React.lazy(() => import('@mui/material/DialogContent'))
// const DialogContentText = React.lazy(() => import('@mui/material/DialogContentText'))
// const DialogTitle = React.lazy(() => import('@mui/material/DialogTitle'))
// const TextField = React.lazy(() => import('@mui/material/TextField'))

export default function EditSkillDialog() {

	const { selectedSkill, setEditDialogState, editSkillDialogOpen, setCurrentSkillExamples, setSkillName, setSkillTarget } = useSkillsStore()
	const { saveSkill, skillExampleTextBoxes } = useSkillDialog()
	const formRef = useRef<HTMLFormElement>(null)

	const handleClose = () => {
		setEditDialogState(false)
	}

	const addExample = () => {
		const newExample: SkillExampleProps = { text: '' }
		const tempExamples = selectedSkill.skillExamples?.concat(newExample)
		if (tempExamples) {
			setCurrentSkillExamples(tempExamples)
		}
	}

	const handleSave = () => {
		saveSkill(selectedSkill, formRef)
		setEditDialogState(false)
	}

	return <>
		<Dialog open={editSkillDialogOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">Edit Skill: {selectedSkill.skillName}</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Use this form to add or edit a Skill.
				</DialogContentText>
				<form ref={formRef}>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Skill Name"
						type="text"
						defaultValue={selectedSkill.skillName}
						placeholder="Enter a skill name..."
						fullWidth
						onChange={(evt: React.ChangeEvent<HTMLInputElement>) => { setSkillName(evt.target.value) }} />
					<TextField
						autoFocus
						margin="dense"
						id="target"
						label="Target Progress"
						type="number"
						defaultValue={selectedSkill.percentage}
						placeholder="Enter a target progress..."
						onInput={(evt: React.ChangeEvent<HTMLInputElement>) => { setSkillTarget(evt.target.valueAsNumber) }} />
					{skillExampleTextBoxes(selectedSkill.skillExamples)}
					<Button variant="text" color="primary" onClick={() => { addExample() }} startIcon={<BiCommentAdd />} >Add Example</Button>
				</form>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="secondary">
					Cancel
				</Button>
				<Button onClick={handleSave} color="primary">
					Save
				</Button>
			</DialogActions>
		</Dialog>
	</ >
}