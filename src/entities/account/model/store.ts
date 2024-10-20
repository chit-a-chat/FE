import { create } from "zustand";

import { Account, CreateAccount } from "./models";

interface LoginState {
    isLoggedIn: boolean;
    login: (id: string, password: string) => Promise<void>;
    logout: () => void;
}

interface AccountStore extends LoginState {
    account: Account | null;
    fetchAccount(): Promise<void>;
    createAccount(account: CreateAccount): Promise<void>;
}

export const useAccountStore = create<AccountStore>((set) => ({
    isLoggedIn: false,
    account: null,
    login: async (id, password) => {
        console.log(id, password);
        set({
            isLoggedIn: true,
            account: {
                id: "아이디",
                name: "John Doe",
                profileImage:
                    "https://images.unsplash.com/photo-1542327897-d73f4005b533?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                createdAt: new Date(),
                key: "",
            },
        });
    },
    logout: () => set({ isLoggedIn: false, account: null }),
    fetchAccount: async () => {},
    createAccount: async (account) => {
        console.log(account);
    },
}));
