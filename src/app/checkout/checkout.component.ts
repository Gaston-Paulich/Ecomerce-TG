import { Component, OnInit } from '@angular/core';
import { checkout } from '../models/checkout.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  $index:string='';
  minCardYear:string='';
  constructor() { }

  ngOnInit(): void {
  }
  card:checkout={
    name: '',
    numberCard:'' ,
    cvv: '',
  }
  sendData(){
    console.log(this.card)
  }
}
