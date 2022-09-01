import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomercreationService } from '../../Shared/Services/Customercreation.service'
import { Customers } from '../../Shared/Models/CustomerCreation';
//import { CustomerlistComponent } from '../../Pages/customerlist/customerlist.component';
import { HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.scss']
})
export class ViewcustomerComponent implements OnInit {
  id: number;
  customer: Customers;
 
  constructor(public router:Router,private CustomercreationService: CustomercreationService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCustomerDetails(this.route.snapshot.params['id']);    
  }

  getCustomerDetails(id:any)
  {
    this.CustomercreationService.getCustomer(id).subscribe((data:any) => 
    {this.customer = data;
      console.log(this.customer);
      }); 
      
  }

}
