import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenService } from './../../shared/authen.service';
import { CustomerService } from 'src/app/shared/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  email:string;
  password:any;
  constructor(private http: HttpClient, private authenService: CustomerService, private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(value){
    // console.log(value);
    this.http.post('http://localhost:3000/api/auth/login',{
      email:value.email,
      password:value.password
    }).subscribe((data:any)=>{
      // console.log(data);
      this.authenService.setToken(data.token);
      console.log(data.token);
      this.route.navigate(['/customers']);
    })
  }

}
