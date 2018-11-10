import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { BankAccountComponent } from './components/bank/bank-account/bank-account.component';

const routes: Routes = [
  { path: '', redirectTo: '/bank-account', pathMatch: 'full' },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: '/bank-account', pathMatch: 'full' },
      { path: 'bank-account', component: BankAccountComponent, pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
