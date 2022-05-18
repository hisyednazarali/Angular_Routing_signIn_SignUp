import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public signInForm!: FormGroup;

  
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  signIn(){
    this.http.get<any>("http://localhost:3000/signupUsers").subscribe(res =>{
      const user = res.find((a:any)=>{
      
        return a.email === this.signInForm.value.email && a.password === this.signInForm.value.password
      });
      if(user){
        alert("Sign in successfully");
        this.signInForm.reset();
        this.router.navigate(['home'])
        console.log(user)
      }else{
        alert("user not found!!");
        this.signInForm.reset();
      }
    
    })

  }

  
    

  }
  

 

