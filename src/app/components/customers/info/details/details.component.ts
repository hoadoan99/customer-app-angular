import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from './../../../../shared/customer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  firstName: string ;
  address: string ;
  city: string ;
  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    // console.log(this.route.snapshot.params.id);
    this.customerService.getCustomerById(id).subscribe((res:any)=>{
      console.log(res);
      this.firstName = res.firstName;
      this.address = res.address;
      this.city = res.city;
    })


  }


}
