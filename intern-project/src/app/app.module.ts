import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { AllCustomersComponent } from './customer/all-customers/all-customers.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgConfirmModule } from 'ng-confirm-box';
import { NgToastModule } from 'ng-angular-popup';
import { ListCustomersComponent } from './customer/list-customers/list-customers.component';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DetailCustomerComponent } from './customer/detail-customer/detail-customer.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MapCustomerComponent } from './customer/map-customer/map-customer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import { AddConfirmComponent } from './customer/add-confirm/add-confirm.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    AllCustomersComponent,
    AddCustomerComponent,
    ListCustomersComponent,
    DetailCustomerComponent,
    MapCustomerComponent,
    DeleteCustomerComponent,
    AddConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgToastModule,
    NgConfirmModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule, 
    MatPaginatorModule, 
    MatTabsModule, 
    MatIconModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
