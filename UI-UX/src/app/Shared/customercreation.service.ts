import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from '../../Shared/Models/CustomerCreation';
import { from, Observable,of, throwError } from 'rxjs';
import { map, catchError,tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class CustomercreationService
 {
      constructor( private httpClient:HttpClient){}

        getcustomerdetails()
        {
          return this.httpClient.get('http://localhost:8080/BankApp/bank/Customerlist').
          pipe(
            map((data: Customers[]) => {return data;}), 
            catchError( error => { return throwError( 'Something went wrong!' );})
         )
         }
         
         /*getCustomer(id: number): Observable<any> 
         {
          return this.httpClient.get('http://localhost:8080/BankApp/bank/customers/'+ id);
        }*/

        private handleError<T> (operation = 'operation', result?: T) {
          return (error: any): Observable<T> => {
        
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
        
            // Let the app keep running by returning an empty result.
            return of(result as T);
          };
        }

        getCustomer(id: number): Observable<Customers> {
          const url = 'http://localhost:8080/BankApp/bank/customers/'+id;
          return this.httpClient.get<Customers>(url).pipe(
            tap(_ => console.log(`fetched customer id=${id}`)),
            catchError(this.handleError<Customers>(`getCsutomer id=${id}`))
          );
        }

}
