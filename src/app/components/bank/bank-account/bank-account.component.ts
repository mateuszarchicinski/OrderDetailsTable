import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { BankAccount } from '../../../interfaces/resources/bank/bank-account';
import { Transaction } from '../../../interfaces/resources/bank/transaction';
import { TableDataConfig } from '../../common/table/table-data/table-data.component';
import { TableFilter } from '../../common/table/table-filter/table-filter.component';
import { ApiService } from '../../../services/api/api.service';

@Component({
    selector: 'app-bank-account',
    templateUrl: './bank-account.component.html',
    styleUrls: ['./bank-account.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BankAccountComponent {

    @Input() set bankAccount(v: BankAccount) {
        this._bankAccount = v;
    }

    get bankAccount(): BankAccount {
        return this._bankAccount || this.api.getAccount();
    }

    private _bankAccount: BankAccount;

    constructor(private api: ApiService) {
    }

    get tableDataConfig(): TableDataConfig {
        const activeEntryNumber = 5;
        const activePageNumber = 1;
        return {activeEntryNumber, activePageNumber};
    }

    get tableFiltersModel(): TableFilter[] {
        const transactionTypes = this.bankAccount.transactions.reduce((types, transaction) => {
            const isNotExistingType = !types.some(type => type.value === transaction.type);
            if (isNotExistingType) {
                const name = transaction.type;
                const value = transaction.type;
                types.push({name, value})
            }
            return types
        }, []);

        return [
            {
                name: 'Merchant',
                id: 'merchantName',
            },
            {
                name: 'Description',
                id: 'description',
            },
            {
                name: 'Type',
                id: 'type',
                options: transactionTypes,
            }
        ]
    }

    trackByFn(index: number, transaction: Transaction): string {
        return transaction.id;
    }

}
