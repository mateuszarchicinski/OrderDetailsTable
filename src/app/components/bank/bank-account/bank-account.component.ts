
import { Component, Input, OnInit } from "@angular/core";
import { BankAccount } from '../../../interfaces/resources/bank/bank-account';
import { ApiService } from "../../../services/api/api.service";

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent implements OnInit {

  @Input() bankAccount: BankAccount;

  constructor(private readonly api: ApiService) { }

  ngOnInit() {
    this.bankAccount = this.api.getAccount();
  }
}
