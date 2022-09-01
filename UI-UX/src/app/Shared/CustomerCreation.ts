import { logging } from 'protractor';

export class Customers
{
    customercode:string;
    customername:string;
    phonenumber:number;
    email:string
    aadharnumber: string;
    gender:string;
    currentbalance :number;
    
    
     constructor
      (
          customercode:string,
          customername:string,
          phonenumber: number,
          email:string,
          aadharnumber: string,
          gender:string,
          currentbalance:number
     ) 

     {
       
          this.customercode = customercode;
          this. customername = customername;
          this.phonenumber = phonenumber;
          this.email= email;
          this.aadharnumber = aadharnumber;
          this.gender = gender;
          this.currentbalance = currentbalance;
     }
    
  
  
  
  
  }