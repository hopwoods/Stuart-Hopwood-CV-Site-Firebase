import create from "zustand"
import { useSkillDatabase } from "../database/skillsDatabase"
import { useFirebase } from "../firebase/useFirebase"
import { SkillExampleProps, SkillProps } from "../types"
const { db } = useFirebase()
const { getAllSkillsFromDb, deleteSkillFromDb, deleteExampleFromDb, saveSkillToDb } = useSkillDatabase()

type SkillsState = {

    //Properties
    skills: SkillProps[]
    selectedSkill: SkillProps
    loading: boolean
    editSkillDialogOpen: boolean
    addSkillDialogOpen: boolean

    setLoading: (value: boolean) => void

    //skills functions
    setSkills: (skills: SkillProps[]) => void
    setCurrentSkill: (skill: SkillProps) => void
    getSkillsFromDb: () => void
    deleteSkill: (id: string) => void
    setSkillName: (value: string) => void
    setSkillTarget: (value: number) => void
    saveSkillToDb: () => void

    //Form functions
    setEditDialogState: (openState: boolean) => void
    setAddDialogState: (openState: boolean) => void

    //Examples Functions
    setCurrentSkillExamples: (examples: SkillExampleProps[]) => void
    removeSkillExample: (id: string) => void
}

export const useSkillsStore = create<SkillsState>((set, get) => ({
    skills: [],
    selectedSkill: {
        skillName: "",
        percentage: 0
    },
    loading: false,
    editSkillDialogOpen: false,
    addSkillDialogOpen: false,

    setSkills: (skills: SkillProps[]) => {
        set({ skills: skills })
    },

    setLoading: (value: boolean) => {
        set({ loading: value })
    },

    setCurrentSkill: async (skill: SkillProps) => {
        set({ selectedSkill: skill })
    },

    getSkillsFromDb: async () => {
        get().setLoading(true)

        const skills = await getAllSkillsFromDb()
        if (skills)
            get().setSkills(skills)

        get().setLoading(false)
    },

    saveSkillToDb: async () => {
        await saveSkillToDb(get().selectedSkill)
        get().getSkillsFromDb()
    },

    deleteSkill: async (id: string) => {
        await deleteSkillFromDb(id)
        get().getSkillsFromDb()
    },

    setEditDialogState: (openState: boolean) => {
        set({ editSkillDialogOpen: openState })
    },
    setAddDialogState: (openState: boolean) => {
        set({ addSkillDialogOpen: openState })
    },

    setCurrentSkillExamples: async (examples: SkillExampleProps[]) => {
        const skill = get().selectedSkill
        if (skill)
            skill.skillExamples = examples
        set({ selectedSkill: skill })
    },
    setSkillName: (value: string) => {
        const skill = get().selectedSkill
        if (skill)
            skill.skillName = value
        set({ selectedSkill: skill })
    },
    setSkillTarget: (value: number) => {
        const skill = get().selectedSkill
        if (skill)
            skill.percentage = value
        set({ selectedSkill: skill })
    },

    removeSkillExample: async (exampleId: string,) => {
        {
            const selectedSkill = get().selectedSkill
            if (selectedSkill.skillExamples && selectedSkill.id) {
                const examplesCopy: SkillExampleProps[] = [...selectedSkill.skillExamples]
                const index = examplesCopy.findIndex(x => x.id === exampleId)
                if (index !== -1) {
                    get().setCurrentSkillExamples(examplesCopy.filter(x => x.id !== exampleId))
                    await deleteExampleFromDb(selectedSkill.id, exampleId)
                }
            }
        }
    },
}))
