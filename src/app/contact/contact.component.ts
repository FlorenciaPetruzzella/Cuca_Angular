import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactDataService } from '../contact-data.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {

  formContact!: FormGroup;
  msg = false;
  error = false;
  query = [];

  constructor(
    private formBuilder: FormBuilder,
    private contactDataService: ContactDataService) {
    this.buildForm();
  }

  private buildForm() {
    this.formContact = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(200)]],
    });
  }

  addQuery(event: Event) {
    if(this.formContact.valid){
      this.contactDataService.addQuery(this.formContact);
      this.formContact.reset();
      this.msg = true;
    } else {
      this.error = true;
    }
  }

  

}

