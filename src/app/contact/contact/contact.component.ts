import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tele: ['', Validators.required],
      objet: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.contactForm.value);
  }
}