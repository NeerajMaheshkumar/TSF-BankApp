import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { transactioncreationservice } from '../../Shared/Services/transactioncreation.service'
import { MoneyTransferModel } from '../../Shared/Models/MoneyTransferModel';

@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.scss']
})
export class TransactionlistComponent implements OnInit {
  transaction : MoneyTransferModel[];

  constructor(public http: HttpClient, private transactioncreationservice: transactioncreationservice){}

  ngOnInit() 
  {
    this.getTransactionList();
  }

  getTransactionList() {
    this.transactioncreationservice.gettransactiondetails().subscribe((data:any[]) => {console.log(data);
    this.transaction = data;
    let str: string = JSON.stringify(this.transaction);
    });
  }

}
