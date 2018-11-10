import { Component, Input } from '@angular/core';

import { BankAccount } from '../../../interfaces/resources/bank/bank-account';
import { ApiService } from '../../../services/api/api.service';

@Component({
    selector: 'app-bank-account',
    templateUrl: './bank-account.component.html',
    styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent {

    @Input() set bankAccount(v: BankAccount) {
        this._bankAccount = v
    }

    get bankAccount(): BankAccount {
        return this._bankAccount || this.api.getAccount();
    }

    private _bankAccount: BankAccount;

    constructor(private api: ApiService) {
    }

}
