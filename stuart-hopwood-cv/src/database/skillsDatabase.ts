import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore"
import { toast } from "react-toastify"
import { useFirestore } from "../firebase/usefirestore"
import { SkillExampleProps, SkillProps } from "../types"

export function useSkillDatabase() {
    const { addDoc, addOrUpdateDoc, getAll, getAllAndSort, deleteDoc } = useFirestore()

    async function getAllSkillsFromDb() {
        try {
            const results = await getAllAndSort("skills", { field: "percentage", direction: "desc" })

            if (!results.empty) {
                const skillsWithExamples: SkillProps[] = []
                results.forEach((doc) => {
                    const skillData = doc.data()
                    const skill: SkillProps = {
                        id: doc.id,
                        skillName: skillData.skillName,
                        percentage: skillData.percentage,
                    }
                    skillsWithExamples.push(skill)
                })

                for (const skill of skillsWithExamples) {
                    await getExamplesForSkill(skill)
                }

                return skillsWithExamples
            }
        }
        catch (error) {
            showErrorMessage("Something went wrong fetching the skills.")
        }
    }

    async function getExamplesForSkill(skill: SkillProps) {
        const results = await getAll(`skills/${skill.id}/examples`)
        if (results) {
            const examples: SkillExampleProps[] = []
            results.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
                const data = doc.data()
                const example: SkillExampleProps = {
                    id: doc.id,
                    text: data.text
                }
                examples.push(example)
            })

            skill.skillExamples = examples
        }
    }

    async function saveSkillToDb(skill: SkillProps) {
        if (skill.id) {
            await addOrUpdateDoc("skills", skill.id, {
                skillName: skill.skillName,
                percentage: skill.percentage
            })

            if (skill.skillExamples)
                await saveExamplesToDb(skill)
        }
        else {
            const newId = (await addDoc("skills", {
                skillName: skill.skillName,
                percentage: skill.percentage
            }))

            if (skill.skillExamples && newId)
                skill.id = newId
            await saveExamplesToDb(skill)
        }
        showSuccessMessage(`Skill "${skill.id}" has been saved`)
    }

    async function deleteSkillFromDb(id: string) {
        await deleteDoc(`skills/${id}`)
        showSuccessMessage(`Skill "${id}" has been deleted`)
    }

    async function saveExamplesToDb(skill: SkillProps) {
        const path = `skills/${skill.id}/examples`
        if (skill.skillExamples) {
            skill.skillExamples.forEach(async (example) => {
                if (example.id) {
                    await addOrUpdateDoc(path, example.id, {
                        text: example.text
                    })
                }
                else {
                    await addDoc(path, {
                        text: example.text
                    })
                }
                //showSavedSuccessMessage(`Example ${example.id} has been saved`)
            })
        }
    }

    async function deleteExampleFromDb(skillId: string, exampleId: string) {
        await deleteDoc(`skills/${skillId}/examples/${exampleId}`)
        showSuccessMessage(`Example ${exampleId} has been deleted`)
    }

    const showSuccessMessage = (message: string) => toast.success(message, { theme: "dark" })
    const showErrorMessage = (errorText: string) => toast.error(errorText, { theme: "dark" })


    return { saveSkillToDb, saveExamplesToDb, getAllSkillsFromDb, getExamplesForSkill, deleteExampleFromDb, deleteSkillFromDb }
}