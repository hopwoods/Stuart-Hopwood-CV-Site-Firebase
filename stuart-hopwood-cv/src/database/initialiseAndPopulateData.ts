import { Firestore } from 'firebase/firestore'
import { AboutTextProps } from '../state/aboutTextStore'
import { SkillProps } from '../types/skillProps'
import AboutTextDb from './aboutTextDb'
import AppDatabase from './appDatabase'
import SkillsDb from './skillsDb'

type InitialsieAndPopulateDataProps = {
	db: Firestore | undefined
	storeAppDb: (appDb: AppDatabase) => void
	setSkills: (skills: SkillProps[]) => void
	setAboutText: (aboutText: AboutTextProps) => void
}

/** Creates and store db wrapper classes, retrieves and then stores data to the application state */
export async function initialiseAndPopulateData({ db, storeAppDb, setSkills, setAboutText }: InitialsieAndPopulateDataProps) {
	if (db) {
		const appDb = new AppDatabase(db)
		storeAppDb(appDb)

		//Skills
		const skillsDb = getSkillsDb(appDb)
		const skills = await skillsDb.getAllSkillsFromDb()
		if (!skills) {
			throw ('InitialiseAndPopulateData: Could not retrieve skills')
		}
		else {
			setSkills(skills)
		}

		//AboutText
		const aboutTextDb = getAboutTextDb(appDb)
		const aboutText = await aboutTextDb.getAboutTextFromDb()
		if (!aboutText) {
			throw ('InitialiseAndPopulateData: Could not retrieve aboutText')
		}
		else {
			setAboutText(aboutText)
		}
	}
	else {
		throw 'Firestore DB is missing or undefined'
	}

}

export function getSkillsDb(appDb: AppDatabase | undefined): SkillsDb {
	if (appDb) {
		const skillsDb = new SkillsDb(appDb)
		return skillsDb
	}
	else {
		throw 'GetSkillsDB: Application DB is missing'
	}
}

export function getAboutTextDb(appDb: AppDatabase | undefined) {
	if (appDb) {
		const db = new AboutTextDb(appDb)
		return db
	}
	else {
		throw 'GetAboutTextDb: Application DB is missing'
	}
}