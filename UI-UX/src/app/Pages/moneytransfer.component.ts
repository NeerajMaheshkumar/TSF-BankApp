import { Component, OnInit } from '@angular/core';
import { transactioncreationservice } from 'src/app/Shared/Services/transactioncreation.service';
import { MoneyTransferModel } from '../../Shared/Models/MoneyTransferModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Customers } from '../../Shared/Models/CustomerCreation';




export interface Customer
{
  value: string;
  viewValue: string;
}





@Component({
  selector: 'app-moneytransfer',
  templateUrl: './moneytransfer.component.html',
  styleUrls: ['./moneytransfer.component.scss']
})
export class MoneytransferComponent implements OnInit
 {

  
 moneytransfer:  MoneyTransferModel = new MoneyTransferModel();
  submitted = false;
  customer : Customers[];
 

 
  customers: Customer[] = 
  [
     { value: 'C01', viewValue: 'C01 Akash' },
     { value: 'C02', viewValue: 'C02 Bhasker' },
  ];


  constructor(private transactioncreationservice: transactioncreationservice,private router: Router) {}

  ngOnInit() 
  {}


  save() 
  {

    this.transactioncreationservice.settransactiondetails(this.moneytransfer).subscribe(data => console.log(data), error => console.log(error));
    alert("SAVED SUCCESSFULLY");
  }

  onSubmit() {
    this.submitted = true;
    this.save();   
    this.router.navigate(['/Pages/transactionlist']); 
  }


 }