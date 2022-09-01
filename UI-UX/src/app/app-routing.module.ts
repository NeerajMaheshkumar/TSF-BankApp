import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthenticationModule } from './Authentication/authentication.module';
import { MasterPageModule } from './Pages/bank-master-page/bank-master-page.module';
import { ViewcustomerComponent } from './Pages/viewcustomer/viewcustomer.component';


const routes: Routes = [

  {
    path: 'Pages',
    loadChildren: () => import('./Pages/bank-master-page/bank-master-page.module').then(m => m.MasterPageModule)
  },
  
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  /*{
    path: 'viewcustomer/:id',
    component: ViewcustomerComponent,
    data: { title: 'Customer Details' }
  },*/
];
@NgModule({
  imports:
   [
  RouterModule.forRoot(routes)
  //AuthenticationModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }