import create from 'zustand'
import { AboutTextSlice, createAboutTextStore } from './aboutTextStore'
import { createDataStore, DataSlice } from './dataStore'
import { createSkillStore, SkillSlice } from './skillsStore'
import { createUserStore, UserSlice } from './userStore'

export type AppStore = SkillSlice & AboutTextSlice & DataSlice & UserSlice

export const useAppStore = create<AppStore>((set, get) => ({
	...createDataStore(set, get),
	...createUserStore(set, get),
	...createSkillStore(set, get),
	...createAboutTextStore(set, get),
}))