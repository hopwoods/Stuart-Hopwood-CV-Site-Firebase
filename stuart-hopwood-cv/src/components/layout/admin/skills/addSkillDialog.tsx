import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useRef } from 'react'
import { BiCommentAdd } from 'react-icons/bi'
import { useSkillDialog } from '../../../../Hooks'
import { useAppStore } from '../../../../state/appStore'
import { SkillExampleProps } from '../../../../types'

// const Button = React.lazy(() => import('@mui/material/Button'))
// const Dialog = React.lazy(() => import('@mui/material/Dialog'))
// const DialogActions = React.lazy(() => import('@mui/material/DialogActions'))
// const DialogContent = React.lazy(() => import('@mui/material/DialogContent'))
// const DialogContentText = React.lazy(() => import('@mui/material/DialogContentText'))
// const DialogTitle = React.lazy(() => import('@mui/material/DialogTitle'))
// const TextField = React.lazy(() => import('@mui/material/TextField'))

export default function AddSkillDialog() {

	const { selectedSkill, setAddDialogState, addSkillDialogOpen, setCurrentSkillExamples, setSkillName, setSkillTarget } = useAppStore()
	const { saveSkill, skillExampleTextBoxes } = useSkillDialog()
	const formRef = useRef<HTMLFormElement>(null)

	const handleClose = () => {
		setAddDialogState(false)
	}

	const addExample = () => {
		const newExample: SkillExampleProps = { text: '' }
		let tempExamples: SkillExampleProps[] = []
		if (selectedSkill.skillExamples) {
			tempExamples = [...selectedSkill.skillExamples]
		}
		tempExamples.push(newExample)
		if (tempExamples) {
			setCurrentSkillExamples(tempExamples)
		}
	}

	const handleSave = async () => {
		await saveSkill(selectedSkill, formRef)
		setAddDialogState(false)
	}

	return <>
		<Dialog open={addSkillDialogOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">Add New Skill</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Use this form to add a skill.
				</DialogContentText>
				<form ref={formRef}>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Skill Name"
						type="text"
						placeholder="Enter a skill name..."
						defaultValue={selectedSkill.skillName}
						fullWidth
						onChange={(evt: React.ChangeEvent<HTMLInputElement>) => { setSkillName(evt.target.value) }} />
					<TextField
						autoFocus
						margin="dense"
						id="target"
						label="Target Progress"
						defaultValue={selectedSkill.percentage}
						type="number"
						placeholder="Enter a target progress..."
						onInput={(evt: React.ChangeEvent<HTMLInputElement>) => { setSkillTarget(evt.target.valueAsNumber) }} />
					{skillExampleTextBoxes(selectedSkill.skillExamples)}
					<div>
						<Button variant="text" color="primary" onClick={() => { addExample() }} startIcon={<BiCommentAdd />}>Add Example</Button>
					</div>
				</form>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="secondary">
					Cancel
				</Button>
				<Button onClick={async () => await handleSave()} color="primary">
					Save
				</Button>
			</DialogActions>
		</Dialog>
	</ >
}