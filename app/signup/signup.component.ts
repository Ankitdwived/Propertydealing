import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


frmg!:FormGroup;
  constructor(private fb:FormBuilder,private http: HttpClient){}

  ngOnInit(): void {
    this.frmg=this.fb.group({
      name:[''],
      email:[''],
      address:[''],
      mobile:[''],
      password:['']
    })
  }
  Adddata(){
    this.http.post<any>("http://localhost:3000/signup",this.frmg.value).subscribe(any=>{
alert("Account open  Successfully ");
  },
  error=>{
    alert("not inserted");
    })
  }

}
