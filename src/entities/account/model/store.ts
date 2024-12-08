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
    changeNickname(newName: string): Promise<void>;
    changePassword(currentPwd: string, newPwd: string, confirmPwd: string): Promise<void>;
    deleteAccount(): Promise<void>;
}

export const useAccountStore = create<AccountStore>((set, get) => ({
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
                email: "joedone123@gmail.com",
                createdAt: new Date(),
                key: "",
            },
        });
    },
    logout: () => {
        set({ isLoggedIn: false, account: null });
    },
    fetchAccount: async () => {},
    createAccount: async (account) => {
        console.log(account);
    },
    changeNickname: async (newName) => {
        const { account, isLoggedIn } = get();
        if (!(isLoggedIn && account)) throw new Error("로그아웃 상태입니다.");
        if (account.name === newName) return;
        set({ account: { ...account, name: newName } });
    },
    changePassword: async (currentPwd, newPwd, confirmPwd) => {
        const { account, isLoggedIn } = get();
        if (!(isLoggedIn && account)) throw new Error("로그아웃 상태입니다.");
        if (newPwd !== confirmPwd) {
            console.log("비밀번호 불일치");
            return;
        }
        console.log("비밀번호 변경 완료", currentPwd, newPwd, confirmPwd);
    },
    deleteAccount: async () => {},
}));
