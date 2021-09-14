import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getApiCustomer(){
    return this.http.get(`http://localhost:3000/api/customers`);
  }

  getApiPage(current:number , total:number){
    return this.http.get(`http://localhost:3000/api/customers/page/${current}/${total}`);
  }

  getCustomerById(id:number){
    return this.http.get(`http://localhost:3000/api/customers/${id}`);
  }


}
