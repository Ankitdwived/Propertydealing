import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-purchasesignup',
  templateUrl: './purchasesignup.component.html',
  styleUrls: ['./purchasesignup.component.css']
})
export class PurchasesignupComponent {




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
    this.http.post<any>("http://localhost:3000/psignup",this.frmg.value).subscribe(any=>{
alert("Account Open Successfully");
  },
  error=>{
    alert("not inserted");
    })
  }

}

