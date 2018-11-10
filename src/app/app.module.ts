import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppCommonModule } from './components/common/common.module';
import { AppRoutingModule } from './app.routing';
import { ApiService } from './services/api/api.service';
import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/admin-layout/navbar/navbar.component';
import { SidebarComponent } from './components/admin-layout/sidebar/sidebar.component';
import { FooterComponent } from './components/admin-layout/footer/footer.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { BankAccountComponent } from './components/bank/bank-account/bank-account.component';

@NgModule({
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        SidebarComponent,
        NavbarComponent,
        FooterComponent,
        BankAccountComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
        RouterModule,
        AppRoutingModule,
        AppCommonModule,
    ],
    providers: [ApiService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
