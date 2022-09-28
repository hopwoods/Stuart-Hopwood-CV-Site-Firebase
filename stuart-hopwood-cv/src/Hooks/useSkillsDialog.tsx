//import { SkillExampleInput } from '../components/controls'
import React from 'react'
import SkillExampleInput from '../components/controls/forms/skillExampleInput'
import { useSkillDatabase } from '../database/skillsDatabase'
import { useSkillsStore } from '../state/skillsStore'
import { SkillExampleProps, SkillProps } from '../types'

// const SkillExampleInput = React.lazy(() => import('../components/controls/forms/skillExampleInput'))

export function useSkillDialog() {
	const { setCurrentSkillExamples, setCurrentSkill } = useSkillsStore()
	const { saveSkillToDb } = useSkillDatabase()
	function saveSkill(skill: SkillProps, ref: React.RefObject<HTMLFormElement>) {

		const newExamples: SkillExampleProps[] = []
		if (skill.skillExamples && skill.skillExamples?.length > 1) {
			// eslint-disable-next-line no-unsafe-optional-chaining
			const examples = [...ref.current?.skillExamples]
			if (examples.length > 0) {
				examples.forEach(function (example) {
					const newExample: SkillExampleProps = {
						id: example.id,
						text: example.value
					}
					newExamples.push(newExample)
				})
			}
		}

		if (skill.skillExamples && skill.skillExamples?.length === 1) {
			const example = ref.current?.skillExamples
			if (example) {
				const newExample: SkillExampleProps = {
					id: example.id,
					text: example.value
				}
				newExamples.push(newExample)
			}
		}

		skill.skillExamples = newExamples

		setCurrentSkillExamples(newExamples)
		setCurrentSkill(skill)

		saveSkillToDb(skill)
	}

	const skillExampleTextBoxes = (examples?: SkillExampleProps[]) => {
		if (examples) {
			return <>
				{
					examples.map(function (example, idx) {
						return (
							<SkillExampleInput skillExample={example} key={idx} />
						)
					})
				}
			</>
		}
	}

	return { skillExampleTextBoxes, saveSkill }

}