import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { SkillExampleProps, SkillProps } from '../types/skillProps'
import AppDatabase from './appDatabase'

/** Wrapper for Skills related database actions */
export default class SkillsDb {
	private firestore: AppDatabase

	constructor(firestore: AppDatabase) {
		this.firestore = firestore
	}

	getAllSkillsFromDb = async () => {
		try {
			const results = await this.firestore.getAllAndSort('skills', { field: 'percentage', direction: 'desc' })

			if (results && !results.empty) {
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
					await this.getExamplesForSkill(skill)
				}

				return skillsWithExamples
			}
			console.warn('GetSkillsFromDB: The query returned no results from the skills collection')
		}
		catch (error) {
			this.showErrorMessage('Something went wrong fetching the skills.')
		}
	}

	getExamplesForSkill = async (skill: SkillProps) => {
		const results = await this.firestore.getAll(`skills/${skill.id}/examples`)
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

	saveSkillToDb = async (skill: SkillProps) => {
		if (skill.id) {
			await this.firestore.addOrUpdateDoc('skills', skill.id, {
				skillName: skill.skillName,
				percentage: skill.percentage
			})

			if (skill.skillExamples)
				await this.saveExamplesToDb(skill)
		}
		else {
			const newId = (await this.firestore.addDoc('skills', {
				skillName: skill.skillName,
				percentage: skill.percentage
			}))

			if (skill.skillExamples && newId)
				skill.id = newId
			await this.saveExamplesToDb(skill)
		}
		this.showSuccessMessage(`Skill "${skill.id}" has been saved`)
	}

	deleteSkillFromDb = async (id: string) => {
		await this.firestore.deleteDoc(`skills/${id}`)
		this.showSuccessMessage(`Skill "${id}" has been deleted`)
	}

	saveExamplesToDb = async (skill: SkillProps) => {
		const path = `skills/${skill.id}/examples`
		if (skill.skillExamples) {
			skill.skillExamples.forEach(async (example) => {
				if (example.id) {
					await this.firestore.addOrUpdateDoc(path, example.id, {
						text: example.text
					})
				}
				else {
					await this.firestore.addDoc(path, {
						text: example.text
					})
				}
				//showSavedSuccessMessage(`Example ${example.id} has been saved`)
			})
		}
	}

	deleteExampleFromDb = async (skillId: string, exampleId: string) => {
		await this.firestore.deleteDoc(`skills/${skillId}/examples/${exampleId}`)
		this.showSuccessMessage(`Example ${exampleId} has been deleted`)
	}

	showSuccessMessage = (message: string) => toast.success(message, { theme: 'dark' })
	showErrorMessage = (errorText: string) => toast.error(errorText, { theme: 'dark' })

}