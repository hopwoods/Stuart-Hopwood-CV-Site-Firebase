import create from 'zustand'

export type AboutTextProps = {
	/** Unique ID for the About Text entry */
	id?: string

	/** Text Content for the About Text entry */
	text: string
}
type AboutTextState = {
	aboutText?: AboutTextProps

	/** Boolean to show loading icon whilst fetching data */
	loading: boolean

	/** Action to set the About Text state values */
	setText: (aboutText: AboutTextProps) => void
}

export const useAboutTextStore = create<AboutTextState>((set) => ({
	loading: false,
	setText: (aboutText: AboutTextProps) => set({ aboutText: aboutText }),
}))