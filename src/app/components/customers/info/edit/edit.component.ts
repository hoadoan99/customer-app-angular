import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from './../../../../shared/customer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  firstName: string ;
  lastName: string ;
  address: string ;
  city: string ;
  state:string;
  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    // console.log(this.route.snapshot.params.id);
    this.customerService.getCustomerById(id).subscribe((res:any)=>{
      console.log(res);
      this.firstName = res.firstName;
      this.lastName = res.lastName;
      this.address = res.address;
      this.city = res.city;
      this.state = res.state;
      console.log(res);
    })


  }
  onSubmit(value){

  }
}
