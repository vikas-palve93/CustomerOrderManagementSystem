import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AngularWebStorageModule } from 'angular-web-storage';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Navbar/navbar.component';
import { DashboardComponent } from './Components/Dashboard/dashboard.component';
import { CustomerComponent } from './Components/Customer/customer.component';
import { AddCustomerComponent } from './Template/Add-Customer/add-customer.component';
import { CustomerActionsComponent } from './Components/Customer-Actions/customer-actions.component';
import { CustomerDetailsComponent } from './Components/Customer-Details/customer-details.component';
import { CustomerOrderDetailsComponent } from './Components/Customer-Order-Details/customer-order-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',    component: DashboardComponent },
  { path: 'customer', component: CustomerComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    CustomerComponent,
    AddCustomerComponent,
    CustomerActionsComponent,
    CustomerDetailsComponent,
    CustomerOrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule, 
    AngularWebStorageModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,    )
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
