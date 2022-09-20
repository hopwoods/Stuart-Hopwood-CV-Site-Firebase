import { User } from "firebase/auth";

import create from "zustand";

export type GlobalState = {
    user?: User
    storeUser: (user: User) => void
    deleteUser: () => void
    isAuthenticated: boolean,
    setIsAuthenticated: (value: boolean) => void
    isAuthenticating: boolean
    setAuthenticating: (value: boolean) => void
};

export const useGlobalStore = create<GlobalState>((set) => ({
    storeUser: (user: User) => set({ user: user }),
    deleteUser: () => set({ user: undefined }),
    isAuthenticated: false,
    setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
    isAuthenticating: false,
    setAuthenticating: (value: boolean) => set({ isAuthenticating: value }),
}));
