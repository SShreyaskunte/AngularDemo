import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

//array - *ngfor
//key-value
Products:any[]=[
  {
    "productname" : "Kids Dress"
  },
  {
    "productname" : "Kids toys"
  },
  {
    "productname" : "Laptops"
  },
  {
    "productname" : "Mobiles"
  },
  {
    "productname" : "Watch"
  },
  {
    "productname" : "Footwear"
  },
  {
    "productname" : "Headphones"
  },
]

//Event to hide products
isVisible:boolean = true
hide_products()
{
  this.isVisible =! this.isVisible;
}

// *ngSwitch
product = "Laptop"

//property errorcolor for style binding using ternary

errorcolor:string='red'

//array for style binding with ternary operator with ngSwitch
ProductDetails:any[]=[
  {
    "pid":"100",
    "pname":"Mobile",
    "status":"Active",
    "color":"green"
  },
  {
    "pid":"101",
    "pname":"Headphones",
    "status":"InActive",
    "color":"red"

  },{
    "pid":"102",
    "pname":"Laptops",
    "status":"Out Of Stock",
    "color":"yellow"

  },{
    "pid":"103",
    "pname":"Camera",
    "status":"Active",
    "color":"green"

  },
  {
    "pid":"104",
    "pname":"Kids toys",
    "status":"Out Of Stock",
    "color":"yellow"

  },{
    "pid":"105",
    "pname":"Buses",
    "status":"InActive",
    "color":"red"

  },{
    "pid":"106",
    "pname":"Shoes",
    "status":"Active",
    "color":"green"

  },
]

//style binding using a fnunction

getColor()
{
  return 'red';
}
 
  ngOnInit(): void {
  }



}
