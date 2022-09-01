import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { bootstrap } from 'bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BootstrapModalModule, DialogService } from 'ng2-bootstrap-modal';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { MaterialModule } from './MaterialModule/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LeftsidebarComponent } from './Pages/leftsidebar/leftsidebar.component';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { BankMasterPageComponent } from './Pages/bank-master-page/bank-master-page.component';
import { CustomerlistComponent } from './Pages/customerlist/customerlist.component';
import { ViewcustomerComponent } from './Pages/viewcustomer/viewcustomer.component';
import { MoneytransferComponent } from './Pages/moneytransfer/moneytransfer.component';
//import {CustomercreationService} from './Shared/Services/Customercreation.service'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BootstrapModalModule.forRoot({ container: document.body }),
    ModalModule.forRoot(),
    ToastNoAnimationModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation
    }),
    
  ],
  providers: [DialogService,CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }















 
  

 