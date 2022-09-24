import { useEffect, useState } from 'react'

export function useProgressAnimation(targetProgress: number) {

	const [progress, setProgress] = useState(0)
	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((oldProgress) => {
				const diff = 10
				return Math.min(oldProgress + diff, targetProgress)
			})
		}, 200)

		//Stop updating when target progress is met.
		if (progress === targetProgress) {
			clearInterval(timer)
		}
		return () => {
			clearInterval(timer)
		}
	}, [progress, targetProgress])

	return progress
}
