export interface Transaction {
    id: string;
    providerId: string;
    bankAccountId: string;
    spent: number;
    received: number;
    accountBalance: number;
    currency: string;
    dateTime: Date;
    type: string;
    merchantName: string;
    description: string;
}