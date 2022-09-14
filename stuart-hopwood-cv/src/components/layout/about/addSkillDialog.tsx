import React, { useRef } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import { SkillExampleProps } from "../../../types";
import { SkillExampleInput } from "../../controls";
import { useSkillsStore } from "../../../state";
import { useAccessToken } from "../../../Hooks";
export function AddSkillDialog() {

    const {
        selectedSkillId,
        selectedSkillName,
        selectedSkillTargetProgress,
        selectedSkillExamples,
        setAddDialogState,
        addSkillDialogOpen,
        setCurrentSkillExamples,
        setSkillName,
        setSkillTarget,
        updateSkill,
        checkRecordExists
    } = useSkillsStore();

    const formRef = useRef<HTMLFormElement>(null);
    const accessToken = useAccessToken();

    const skillExampleTextBoxes = (examples?: SkillExampleProps[]) => {
        if (examples) {
            return (
                examples.map(function (example, idx) {
                    return (
                        <SkillExampleInput text={example.text} key={idx} index={idx} />
                    )
                })
            );
        }
    }

    const handleClose = () => {
        setAddDialogState(false);
    }

    const addExample = () => {
        const newExample: SkillExampleProps = {
            text: ""
        };
        let tempExamples: SkillExampleProps[] = [];
        if (selectedSkillExamples) {
            tempExamples = [...selectedSkillExamples];
        }
        tempExamples.push(newExample);
        if (tempExamples) {
            setCurrentSkillExamples(tempExamples);
        }
    }

    const handleSave = () => {


        console.log(``)
        //TODO: Refactor setting of new examples.
        const examples = [...formRef.current?.skillExamples];
        const newExamples: SkillExampleProps[] = [];
        examples.forEach(function (example) {
            const newExample: SkillExampleProps = {
                text: example.value
            }
            newExamples.push(newExample);
        });

        setCurrentSkillExamples(newExamples)

        checkRecordExists(selectedSkillId).then(() => {
            updateSkill(accessToken);
            setAddDialogState(false);
        });

    }

    return (
        <React.Fragment>
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
                            defaultValue={selectedSkillName}
                            fullWidth
                            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => { setSkillName(evt.target.value); }} />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="target"
                            label="Target Progress"
                            defaultValue={selectedSkillTargetProgress}
                            type="number"
                            placeholder="Enter a target progress..."
                            onInput={(evt: React.ChangeEvent<HTMLInputElement>) => { setSkillTarget(evt.target.valueAsNumber); }} />
                        {skillExampleTextBoxes(selectedSkillExamples)}
                        <div>
                            <Button variant="text" color="primary" onClick={() => { addExample() }}>Add Example</Button>
                        </div>
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