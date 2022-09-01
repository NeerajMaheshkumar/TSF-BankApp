import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse, HttpRequest } from '@angular/common/http';
import { MoneyTransferModel } from '../../Shared/Models/MoneyTransferModel';
import { Customers } from '../../Shared/Models/CustomerCreation';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError,tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class transactioncreationservice
 {
  constructor(private http: HttpClient) { }

        settransactiondetails(moneytransfer: MoneyTransferModel)
        {
            return this.http.post('http://localhost:8080/BankApp/bank/SaveTransaction',moneytransfer)
         
         }

         getDropDown()
         {
           return this.http.get('http://localhost:8080/BankApp/bank/Customerlist').
           pipe(
             map((data: Customers[]) => {return data;}), 
             catchError( error => { return throwError( 'Something went wrong!' );})
          )
          }

          gettransactiondetails()
          {
            return this.http.get('http://localhost:8080/BankApp/bank/Transactionlist').
            pipe(
              map((data: any) => {return data;}), 
              catchError( error => { return throwError( 'Something went wrong!' );})
           )
           }

}
