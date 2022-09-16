import { toast } from "react-toastify"
import create from "zustand"
import { useFirestore } from "../firebase/usefirestore"
import { SkillExampleProps, SkillProps } from "../types"

const { getAll } = useFirestore()

type SkillsState = {

    /** List of the skills from tthe database. */
    skills: SkillProps[]

    maxId: number

    //TODO - Refactor Selected Skill into Object

    /** Unique ID for the selected skill */
    selectedSkillId: number

    /** Text Content for the selected skill */
    selectedSkillName: string

    /** Max Percentage for the selected skill */
    selectedSkillTargetProgress: number

    /** List of exampled for the selected skill */
    selectedSkillExamples?: SkillExampleProps[]

    /** Boolean to show loading icon whilst fetching data */
    loading: boolean

    editSkillDialogOpen: boolean

    addSkillDialogOpen: boolean

    /** Action to set the selected skill state values */
    setCurrentSkill: (skill: SkillProps) => void

    /** Action to create or update the selected skill in the DB */
    updateSkill: (accessToken: string) => void

    /** Action to get the skill entries from the DB */
    getSkills: () => void

    /** Action to get the skill entries from the DB */
    deleteSkill: (id: number, accessToken: string) => void

    setEditDialogState: (openState: boolean) => void

    setAddDialogState: (openState: boolean) => void

    setCurrentSkillExamples: (examples: SkillExampleProps[]) => void

    setSkillName: (value: string) => void

    setSkillId: (value: number) => void

    setSkillTarget: (value: number) => void

    setMaxId: (value: number) => void
}

const showSavedSuccessMessage = () => toast.success("✔️ Skill has been saved")
const showDeletedSuccessMessage = () => toast.success("✔️ Skill has been deleted")
const showErrorMessage = (errorText: string) => toast.error(`⛔️ ${errorText}`)

export const useSkillsStore = create<SkillsState>((set, get) => ({
    skills: [],
    maxId: 0,
    selectedSkillId: 1,
    selectedSkillName: "",
    selectedSkillTargetProgress: 0,
    loading: false,
    editSkillDialogOpen: false,
    addSkillDialogOpen: false,
    setCurrentSkill: (skill: SkillProps) => set(
        {
            selectedSkillId: skill.id,
            selectedSkillName: skill.skillName,
            selectedSkillTargetProgress: skill.percentage,
            selectedSkillExamples: skill.skillExamples
        }),
    updateSkill: async (accessToken: string) => {

        const skill: SkillProps = {
            id: get().selectedSkillId,
            skillName: get().selectedSkillName,
            percentage: get().selectedSkillTargetProgress,
            skillExamples: get().selectedSkillExamples
        }

        //TODO AddorUpdate Doc Here
    },
    getSkills: async () => {
        try {
            set({ loading: true })

            //TODO: Add Custom Object Class

            const data = await getAll("skills")

            if (data) {
                const skills = data.map((skill) => skill as SkillProps)
                const ids: number[] = skills.map((skill) => skill.id)
                const maxId = Math.max(...ids)

                set({ skills: skills, maxId: maxId })
            }
            set({ loading: false })
        }
        catch (error) {
            showErrorMessage("Something went wrong fetching the skills.")
        }
    },
    deleteSkill: async (id: number, accessToken: string) => {
        //TODO: Delete skill from db
    },
    setEditDialogState: (openState: boolean) => {
        set({ editSkillDialogOpen: openState })
    },
    setAddDialogState: (openState: boolean) => {
        set({ addSkillDialogOpen: openState })
    },
    setCurrentSkillExamples: (examples: SkillExampleProps[]) => {
        set({ selectedSkillExamples: examples })
    },
    setSkillName: (value: string) => {
        set({ selectedSkillName: value })
    },
    setSkillTarget: (value: number) => {
        set({ selectedSkillTargetProgress: value })
    },
    setSkillId: (value: number) => {
        set({ selectedSkillId: value })
    },
    setMaxId: (value: number) => {
        set({ maxId: value })
    }


}))