import { FooterComponent } from './components/admin-layout/footer/footer.component';
import { NavbarComponent } from './components/admin-layout/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { ApiService } from './services/api/api.service';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { SidebarComponent } from './components/admin-layout/sidebar/sidebar.component';
import { AppRoutingModule } from './app.routing';
import { BankAccountComponent } from './components/bank/bank-account/bank-account.component';
import { TableComponent } from './components/common/table/table.component';

/*---Application imports---*/

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    BankAccountComponent,
    TableComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    RouterModule,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
