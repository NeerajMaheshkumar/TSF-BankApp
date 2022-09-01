import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankMasterPageComponent } from './bank-master-page.component';


import { DashboardComponent} from '../dashboard/dashboard.component';
import { ViewcustomerComponent } from '../viewcustomer/viewcustomer.component';
import { CustomerlistComponent } from '../customerlist/customerlist.component';
import { MoneytransferComponent } from '../moneytransfer/moneytransfer.component';
import { TransactionlistComponent } from '../transactionlist/transactionlist.component';
;
const routes: Routes = [{
  path: '', component: BankMasterPageComponent, children:
    [
      {
        path: 'DashBoard', component: DashboardComponent
      },
     
      {
        path: 'customerlist', component: CustomerlistComponent
      }, 
      {
        path: 'moneytransfer', component:  MoneytransferComponent
      },
      {
        path: 'transactionlist', component:  TransactionlistComponent 
      },
      {
        path: 'viewcustomer/:id',
        component: ViewcustomerComponent,
        data: { title: 'Customer Details' }
      },
      

    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankMasterPageRoutingModule { }

export const MasterPageAllComponent = [
  BankMasterPageComponent,
  DashboardComponent,
  ViewcustomerComponent,
  CustomerlistComponent,
  MoneytransferComponent,
  TransactionlistComponent,
]




