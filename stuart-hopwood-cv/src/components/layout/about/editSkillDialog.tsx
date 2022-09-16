import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import React, { useRef } from "react"
import { useAccessToken } from "../../../security/useAccessToken"
import { useSkillsStore } from "../../../state"
import { SkillExampleProps } from "../../../types"
import { SkillExampleInput } from "../../controls"
export function EditSkillDialog() {

    const {
        //selectedSkillId,
        selectedSkillName,
        selectedSkillTargetProgress,
        selectedSkillExamples,
        setEditDialogState,
        editSkillDialogOpen,
        setCurrentSkillExamples,
        setSkillName,
        setSkillTarget,
        updateSkill,
    } = useSkillsStore()

    const formRef = useRef<HTMLFormElement>(null)

    //TODO: Remove Access Token Hook
    const accessToken = useAccessToken()

    const skillExampleTextBoxes = (examples?: SkillExampleProps[]) => {
        if (examples) {
            return (
                examples.map(function (example, idx) {
                    return (
                        <SkillExampleInput text={example.text} key={idx} index={idx} />
                    )
                })
            )
        }
    }

    const handleClose = () => {
        setEditDialogState(false)
    }

    const addExample = () => {
        const newExample: SkillExampleProps = {
            text: ""
        }
        const tempExamples = selectedSkillExamples?.concat(newExample)
        if (tempExamples) {
            setCurrentSkillExamples(tempExamples)
        }
    }

    const handleSave = () => {
        const examples = [...formRef.current?.skillExamples]
        const newExamples: SkillExampleProps[] = []
        examples.forEach(function (example) {
            const newExample: SkillExampleProps = {
                text: example.value
            }
            newExamples.push(newExample)
        })
        setCurrentSkillExamples(newExamples)
        updateSkill(accessToken)
        setEditDialogState(false)
    }

    return (
        <React.Fragment>
            <Dialog open={editSkillDialogOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Skill: {selectedSkillName}</DialogTitle>
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
                            defaultValue={selectedSkillName}
                            placeholder="Enter a skill name..."
                            fullWidth
                            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => { setSkillName(evt.target.value) }} />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="target"
                            label="Target Progress"
                            type="number"
                            defaultValue={selectedSkillTargetProgress}
                            placeholder="Enter a target progress..."
                            onInput={(evt: React.ChangeEvent<HTMLInputElement>) => { setSkillTarget(evt.target.valueAsNumber) }} />
                        {skillExampleTextBoxes(selectedSkillExamples)}
                        <Button variant="text" color="primary" onClick={() => { addExample() }}>Add Example</Button>
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
        </React.Fragment >
    )
}