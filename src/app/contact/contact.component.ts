import { Component, OnInit } from '@angular/core';
import { form } from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  register:form={
    name:'',
    mail: '',
    phoneNumber: '',
    message: '',
  }
form_contact: any;



  constructor() {

   }

  ngOnInit(): void {
  }
  addMessage(){
    console.log(this.register);


  }
  reset(){
    return this.register !=  this.register
  }

}
