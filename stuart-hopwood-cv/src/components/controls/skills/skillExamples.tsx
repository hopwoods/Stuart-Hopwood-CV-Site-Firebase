import React, { Suspense } from 'react'
import { SkillExampleProps } from '../../../types'

const Accordion = React.lazy(() => import('../accordion/accordion'))
const SkillExample = React.lazy(() => import('./skillExample'))

type SkillExamplesProps = {
	examples?: SkillExampleProps[]
}

export default function SkillExamples({ examples }: SkillExamplesProps) {
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
			return <Suspense>
				<Accordion header={<FirstExample />} content={<RestOfExamples />} />
			</Suspense>
		}
		else {
			return <Suspense>
				{
					examples.map(function (example, idx) {
						return <SkillExample key={idx} id={idx} text={example.text} />
					})
				}
			</Suspense>
		}
	}
	return <></>
}