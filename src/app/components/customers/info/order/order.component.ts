import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  nameOrders = [];
  costOrders = [];
  totalOrder:any;
  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    // console.log(this.route.snapshot.params);
    this.customerService.getCustomerById(id).subscribe((res:any)=>{
      for(let name of res.orders){
            this.nameOrders.push(name.productName);
      }
      for(let cost of res.orders){
            this.costOrders.push(cost.itemCost);
      }
      // console.log(this.nameOrders);
      this.totalOrder = this.costOrders.reduce((a,b)=>a+b);
      console.log(this.totalOrder);

    })
  }

}
