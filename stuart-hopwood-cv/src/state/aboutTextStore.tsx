import { toast } from "react-toastify";
import create from "zustand";
import { devtools } from 'zustand/middleware';
import { Globals } from "../global";
import { Api, HandleError } from "../api";
import { AboutText } from "../types";
import { useGlobalStore } from "./globalStore";

const apiUrl = Globals.ApiSettings.Audience;

type AboutTextState = {
    /** Unique ID for the About Text entry */
    id: number;

    /** Text Content for the About Text entry */
    text: string;

    /** Boolean to show loading icon whilst fetching data */
    loading: boolean;

    /** Boolean to show if a About Text entry is present */
    isRecords: boolean;

    /** Action to set the About Text state values */
    setText: (id: number, text: string) => void;

    /** Action to create or update the About Text in the DB */
    updateAboutText: () => void;

    /** Action to get the About Text entry from the DB */
    getAboutText: () => void;
};

const accessToken = useGlobalStore.getState().accessToken;
const showSuccessMessage = () => toast.success("✔️ New About Text Content has been saved");
const showErrorMessage = (errorText: string) => toast.error(`⛔️ ${errorText}`);

export const useAboutTextStore = create<AboutTextState>(devtools((set, get) => ({
    isRecords: false,
    id: 1,
    text: "",
    loading: false,
    setText: (id: number, text: string) => set({ id: id, text: text }),
    updateAboutText: async () => {
        try {
            const currentId = get().id;
            const currentText = get().text;

            if (get().isRecords) {
                await Api.put<AboutText>(`${apiUrl}AboutText/${get().id}`, { id: currentId, text: currentText }, { headers: { authorization: `bearer ${accessToken}` } });
            }
            else {
                await Api.post<AboutText>(`${apiUrl}AboutText`, { id: currentId, text: currentText }, { headers: { authorization: `bearer ${accessToken}` } });
            }

            showSuccessMessage();
        }
        catch (error) {
            HandleError(error);
            showErrorMessage("Something went wrong setting the AboutText.");
        }
    },
    getAboutText: async () => {
        try {
            set({ loading: true });
            const response = await Api.get<AboutText>(`${apiUrl}AboutText`);
            set({ isRecords: (response.status === 204) ? false : true });

            const { data } = response;
            if (get().isRecords) {
                set({ id: data.id, text: data.text })
            }
            set({ loading: false });

        }
        catch (error) {
            HandleError(error);
            showErrorMessage("Something went wrong fetching the AboutText.");
        }
    }
})));