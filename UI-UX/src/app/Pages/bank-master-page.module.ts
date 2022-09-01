import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankMasterPageRoutingModule, MasterPageAllComponent } from './bank-master-page-routing.module';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MaterialModule } from '../../MaterialModule/material.module';
import { LeftsidebarComponent } from '../leftsidebar/leftsidebar.component';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BootstrapModalModule } from 'node_modules/ng2-bootstrap-modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule, ToastNoAnimationModule, ToastNoAnimation } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewcustomerComponent } from '../viewcustomer/viewcustomer.component';
import { CustomerlistComponent } from '../customerlist/customerlist.component';
import { MoneytransferComponent } from '../moneytransfer/moneytransfer.component';
import { TransactionlistComponent } from '../transactionlist/transactionlist.component';

@NgModule({
  declarations: [
    MasterPageAllComponent, HeaderComponent, FooterComponent,LeftsidebarComponent,ViewcustomerComponent,CustomerlistComponent,MoneytransferComponent,TransactionlistComponent],
 
    
  imports: [
    CommonModule,
    BankMasterPageRoutingModule,
    MaterialModule,
    TextMaskModule,
    HttpClientModule,
    BootstrapModalModule.forRoot({ container: document.body }),
    ModalModule.forRoot(),
    ToastNoAnimationModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,

    BsDropdownModule.forRoot()
  ],
  entryComponents: [],
  providers: []
})
export class MasterPageModule { }

