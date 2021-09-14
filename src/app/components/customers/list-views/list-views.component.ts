import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from './../../../shared/customer.service';

@Component({
  selector: 'app-list-views',
  templateUrl: './list-views.component.html',
  styleUrls: ['./list-views.component.css']
})
export class ListViewsComponent implements OnInit {
  @Input() users:any;
  totalRecords: any;
  customers  = [];
  constructor( private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getApiPage(0,10).subscribe((data:any)=>{
      console.log(data);
        this.totalRecords = data.totalRecords;
        for(let user of data.results){
          this.customers.push(user);
        }
    });
  }
  onChange(event:any){
    this.customers = [];
    let page = event.pageIndex*10;
    let size = event.pageSize;
      this.customerService.getApiPage(page,size).subscribe((data:any)=>{
        console.log(data);
          this.totalRecords = data.totalRecords;
          for(let user of data.results){
            this.customers.push(user);
          }
      });
    console.log(page);
    console.log(size);


}
}
