import create from "zustand";
import { devtools } from 'zustand/middleware';

export type GlobalState = {
    accessToken: string;
    setAccessToken: (token: string) => void;
};

export const useGlobalStore = create<GlobalState>(devtools((set) => ({
    accessToken: "",
    setAccessToken: (token: string) => set({ accessToken: token })
})));
