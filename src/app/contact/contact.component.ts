import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

const URL = 'https://6384dd843fa7acb14f031f6b.mockapi.io/api/v1/queries';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {

  constructor(private http: HttpClient){
  }

  onQueryCreate(queries: {name: string, surname: string, email: string, message: string}) {
    console.log(queries);
    this.http.post(URL, queries).subscribe((res) => {
      console.log(res)
    });
  } 
}
