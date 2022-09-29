import create from 'zustand'
import { AboutTextSlice, createAboutTextStore } from './aboutTextStore'
import { createGlobalStore, GlobalSlice } from './globalStore'
import { createSkillStore, SkillSlice } from './skillsStore'

export type AppStore = GlobalSlice & SkillSlice & AboutTextSlice

export const useAppStore = create<AppStore>((set, get) => ({
	...createGlobalStore(set, get),
	...createSkillStore(set, get),
	...createAboutTextStore(set, get),
}))