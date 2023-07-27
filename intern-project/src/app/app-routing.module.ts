import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCustomersComponent } from './customer/all-customers/all-customers.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { ListCustomersComponent } from './customer/list-customers/list-customers.component';
import { DetailCustomerComponent } from './customer/detail-customer/detail-customer.component';
import { MapCustomerComponent } from './customer/map-customer/map-customer.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';

const routes: Routes = [
  {
    path: '',
    component: AllCustomersComponent
  },
  {
    path: 'card',
    component: AllCustomersComponent
  },
  {
    path:'add',
    component: AddCustomerComponent
  },
  {
    path:'list',
    component: ListCustomersComponent
  },
  {
    path:'detail/:id',
    component: DetailCustomerComponent
  },
  {
    path:'update/:id',
    component: AddCustomerComponent
  },
  {
    path:'map',
    component: MapCustomerComponent
  },
  {
    path:'delete/:id',
    component: DeleteCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
