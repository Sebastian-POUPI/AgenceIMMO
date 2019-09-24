import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.createContactForm();
   }

  ngOnInit() {
  }

  createContactForm() {
    this.contactForm = this.formbuilder.group({
      name: [''],
      email: [''],
      message: ['']
    });
  }

  onSubmit() {
    console.log('date :' , this.contactForm.value);
    
  }

}
