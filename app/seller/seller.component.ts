import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  formvalue!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private route:Router){}

  ngOnInit(): void {
    this.formvalue=this.fb.group({
      name:[''],
      address:[''],
      mobile:[''],
      email:[''],
      password:['']

    })
    
  }
  addData(){
    this.http.post<any>("http://localhost:3000/seller",this.formvalue.value).subscribe(res=>{
alert("seller detail add success fully thanks visit my web side");
//this.route.navigate(['employee'])

  },
  error=>{
    alert("data no insert");
  }
    )
  }

}
