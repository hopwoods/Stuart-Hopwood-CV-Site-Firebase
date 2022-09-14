import { toast } from "react-toastify";
import create from "zustand";
import { devtools } from 'zustand/middleware';
import { Globals } from "../global";
import { Api, HandleError } from "../api";
import { SkillExampleProps, SkillProps } from "../types";

const apiUrl = Globals.ApiSettings.Audience;

type SkillsState = {

    /** List of the skills from tthe database. */
    skills: SkillProps[];

    maxId: number;

    /** Unique ID for the selected skill */
    selectedSkillId: number;

    /** Text Content for the selected skill */
    selectedSkillName: string;

    /** Max Percentage for the selected skill */
    selectedSkillTargetProgress: number;

    /** List of exampled for the selected skill */
    selectedSkillExamples?: SkillExampleProps[];

    /** Boolean to show loading icon whilst fetching data */
    loading: boolean;

    /** Boolean to show if a skill entries are present */
    recordExists: boolean;

    editSkillDialogOpen: boolean;

    addSkillDialogOpen: boolean;

    /** Action to set the selected skill state values */
    setCurrentSkill: (skill: SkillProps) => void;

    /** Action to create or update the selected skill in the DB */
    updateSkill: (accessToken: string) => void;

    /** Action to get the skill entries from the DB */
    getSkills: () => void;

    /** Action to get the skill entries from the DB */
    deleteSkill: (id: number, accessToken: string) => void;

    setEditDialogState: (openState: boolean) => void;

    setAddDialogState: (openState: boolean) => void;

    setCurrentSkillExamples: (examples: SkillExampleProps[]) => void;

    setSkillName: (value: string) => void;

    setSkillId: (value: number) => void;

    setSkillTarget: (value: number) => void;

    setRecordExists: (id: boolean) => void;

    setMaxId: (value: number) => void;

    checkRecordExists: (id: number) => Promise<void>;
};

const showSavedSuccessMessage = () => toast.success("✔️ Skill has been saved");
const showDeletedSuccessMessage = () => toast.success("✔️ Skill has been deleted");
const showErrorMessage = (errorText: string) => toast.error(`⛔️ ${errorText}`);

export const useSkillsStore = create<SkillsState>((set, get) => ({
    skills: [],
    maxId: 0,
    recordExists: false,
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
        };

        if (get().recordExists === true) {
            await Api.put<SkillProps>(`${apiUrl}Skills/${get().selectedSkillId}`, skill, { headers: { authorization: `bearer ${accessToken}` } })
                .then(() => {
                    showSavedSuccessMessage();
                    get().getSkills();
                })
                .catch((error: any) => {
                    HandleError(error);
                    showErrorMessage("Something went wrong fetching the Max Id.");
                });
        }
        else {
            await Api.post<SkillProps>(`${apiUrl}Skills`, skill, { headers: { authorization: `bearer ${accessToken}` } }).then(() => {
                showSavedSuccessMessage();
                get().getSkills();
            })
                .catch((error: any) => {
                    HandleError(error);
                    showErrorMessage("Something went wrong fetching the Max Id.");
                });
        }
    },
    getSkills: async () => {
        try {
            set({ loading: true });
            const response = await Api.get<SkillProps[]>(`${apiUrl}Skills`);
            set({ recordExists: (response.status === 204) ? false : true });

            const { data } = response;
            if (get().recordExists) {
                const ids: number[] = data.map((x: any) => x.id);
                const maxId = Math.max(...ids);
                set({ skills: data, maxId: maxId })
            }
            set({ loading: false });
        }
        catch (error) {
            HandleError(error);
            showErrorMessage("Something went wrong fetching the skills.");
        }
    },
    deleteSkill: async (id: number, accessToken: string) => {
        try {

            await Api.delete(`${apiUrl}Skills/${id}`, { headers: { authorization: `bearer ${accessToken}` } });
            showDeletedSuccessMessage();
        }
        catch (error) {
            HandleError(error);
            showErrorMessage("Something went wrong deleting the skill.");
        }
    },
    setEditDialogState: (openState: boolean) => {
        set({ editSkillDialogOpen: openState });
    },
    setAddDialogState: (openState: boolean) => {
        set({ addSkillDialogOpen: openState });
    },
    setCurrentSkillExamples: (examples: SkillExampleProps[]) => {
        set({ selectedSkillExamples: examples });
    },
    setSkillName: (value: string) => {
        set({ selectedSkillName: value });
    },
    setSkillTarget: (value: number) => {
        set({ selectedSkillTargetProgress: value });
    },
    setSkillId: (value: number) => {
        set({ selectedSkillId: value });
    },
    setRecordExists: async (value: boolean) => {
        set({ recordExists: value })
    },
    setMaxId: (value: number) => {
        set({ maxId: value });
    },
    checkRecordExists: async (id: number) => {
        await Api.get<boolean>(`${apiUrl}Skills/Exists/${id}`)
            .then((response: any) => {
                const { data } = response;
                set({ recordExists: data });
            });
    }


}));