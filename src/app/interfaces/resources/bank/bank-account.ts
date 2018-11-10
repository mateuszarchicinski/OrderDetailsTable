import { Transaction } from './transaction';

export interface BankAccount {
    id: string;
    providerId: string;
    name: string;
    currency: string;
    number: string;
    lastUpdate: Date;
    isActive: boolean;
    bankAccessId: string;
    transactions: Array<Transaction>
}
