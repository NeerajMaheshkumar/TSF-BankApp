

import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NavItem } from './NavItem';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-bank-master-page',
  templateUrl: './bank-master-page.component.html',
  styleUrls: ['./bank-master-page.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(90deg)'})),
      state('expanded', style({transform: 'rotate(-90deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class BankMasterPageComponent implements OnInit {
  
  isSticky: boolean = false;
  navItems: NavItem[] = 
  [
         
          {
            displayName: 'Customer List',
            iconName: 'Customer List',
            route: '/Pages/customerlist',
            children: []
          },
          {
            displayName: 'Transactions',
            route: '',
            children: 
            [
              {
              displayName: 'Transfer Money',
              iconName: 'Transfer Money',
              route: '/Pages/moneytransfer',
              children: []
              },
              {
                displayName: 'Transaction List',
                iconName: 'Transaction List',
                route: '/Pages/transactionlist',
                children: []
              }

            ]
          }
    ];


headingName:string
  loginuser: string;
  expanded: boolean;
  userarray:any=[
    {ID:"1",Value:"Profile",icon:"person"},
    {ID:"2",Value:"About",icon:"help"},
    {ID:"3",Value:"Logout",icon:"power_settings_new"},
  ]
  date:Date; 
  imgUrl: SafeResourceUrl;

   constructor(private router:Router,private elementref:ElementRef) {
        setInterval(() => {
          this.date = new Date()
        }, 1000)
     }
    appd:any;
    sidenav:boolean=true;
    companyname:string
    @ViewChild('appDrawer',{static:false}) appDrawer: MatSidenav;
    ngOnInit() {
      let img=localStorage.getItem("CmpLogo");
	  
      this.companyname=localStorage.getItem("CompanyName")
      const v=this.elementref.nativeElement.querySelector('#exp')
      if(v.className=="mat-menu-trigger mat-button mat-button-base"){
        this.expanded = !this.expanded;  
      }
      let treearray:any=[]
     this.loginuser=localStorage.getItem("LoginUser")
      let UserToken=localStorage.getItem("UserToken")
      var tree = [],
      mappedArr = {},
      arrElem,
      mappedElem;
     
    }
    clickinbox(){
      this.router.navigate(['/Page/Inbox'])
    }
    toggle(){
       this.appDrawer.toggle();      
      this.sidenav=this.appDrawer.opened
      console.log(this.sidenav,"Sidenav")
    }
    userClick(data){
      if(data=="Logout"){
        this.router.navigate(['/Login/authlogin'])
        localStorage.clear()
      }
    }
  
}   
