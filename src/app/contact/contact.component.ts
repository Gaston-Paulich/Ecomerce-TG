import { Component, OnInit } from '@angular/core';
import { form } from './contact.model';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  person:form = {
    name: '',
    phoneNumber:0,
    mail:'',
    message:'',
  }



  constructor() {

   }

  ngOnInit(): void {
  }

}
