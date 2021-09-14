import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../../shared/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customerData = [];
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getApiCustomer().subscribe((res:any)=> {
      // console.log(res);

      for(let user of res){
        this.customerData.push(user);
      }
      console.log(this.customerData);
    });
  }



}
