import { SkillExampleProps } from '../../../types'
import { Accordion } from '../accordion/accordion'
import { SkillExample } from './skillExample'

type SkillExamplesProps = {
	examples?: SkillExampleProps[]
}

export function SkillExamples({ examples }: SkillExamplesProps) {
	if (examples) {
		if (examples.length > 1) {
			const FirstExample = () => {
				return <SkillExample key={0} id={0} text={examples[0].text} />
			}
			const RestOfExamples = () => {
				const restOfExamples = examples.filter((_, idx) => idx > 0)
				return <>
					{
						restOfExamples.map(function (example, idx) {
							return <SkillExample key={idx} id={idx} text={example.text} />
						})
					}
				</>
			}
			return <Accordion header={<FirstExample />} content={<RestOfExamples />} />
		}
		else {
			return <>
				{examples.map(function (example, idx) {
					return <SkillExample key={idx} id={idx} text={example.text} />
				})
				}
			</>
		}
	}
	return <></>
}