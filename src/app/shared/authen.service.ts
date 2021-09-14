import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from 'src/app/shared/customer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  token:string;
  constructor(private http: HttpClient, private customerService: CustomerService) { }

  isLoggedIn(){
    this.token = this.customerService.getToken();
      if (this.token) {
            return true;
      }else{
        return false;
      }
  }
}
