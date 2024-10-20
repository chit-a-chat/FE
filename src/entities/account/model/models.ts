type AccountID = string;

export interface CreateAccount {
    key: string;
}

export interface Account extends CreateAccount {
    id: AccountID;
    name: string;
    profileImage: string | null;
    createdAt: Date;
}
