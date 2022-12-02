import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

const URL = 'https://6384dd843fa7acb14f031f6b.mockapi.io/api/v1/queries';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  constructor(private http: HttpClient) { }

  public addQuery(formContact: FormGroup<any>) {
    console.log(formContact.value);
    this.http.post(URL, formContact.value).subscribe((contact) => {
      console.log(contact)
    });
  }
}
