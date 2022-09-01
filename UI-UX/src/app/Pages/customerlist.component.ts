import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomercreationService } from '../../Shared/Services/Customercreation.service'
import { Customers } from '../../Shared/Models/CustomerCreation';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {
  customer : Customers[];

  ID:number;

  constructor(public http: HttpClient, private customercreationService: CustomercreationService,public router:Router){}

  ngOnInit() 
  {
    this.getCustomerList();
    //this.giveID();
  }

  getCustomerList() {
    this.customercreationService.getcustomerdetails().subscribe((data:any[]) => {console.log(data);
    this.customer = data;
    let str: string = JSON.stringify(this.customer);
    });
  }

 
  customerDetails(id:number)
  {
    this.router.navigate(['/Pages/viewcustomer', id]); 
  }


}
