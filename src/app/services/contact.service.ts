import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { of, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Contact } from '../models/contact.model';




@Injectable({
  providedIn: 'root'
})
export class ContactService {

  URL: string = 'https://jsonplaceholder.typicode.com/users'
  contacts: Array<Contact> = [
    { id: 234, name: 'Eddy muso' },
    { id: 678, name: 'Ken awadi' },
    { id: 87, name: 'Silvia guso' },
    { id: 98, name: 'Wendy kilo' },
    { id: 4, name: 'Eva tonny' },
    { id: 67, name: 'Tonny kulo' },
    { id: 9, name: 'Mercy ngina' },
    { id: 45, name: 'Lydia kani' }
  ]

  constructor(private httpClient: HttpClient) { }
  
  get_contacts(): Observable<Array<Contact>>{ return of(this.contacts) }

  getContacts(): Observable<Array<Contact>>{
    return this.httpClient.get<Contact[]>(this.URL)
              //  .pipe(
              //    map((res: Array<String>)=> {
              //      res.map((usr)=> { id: usr.id, name: usr.id })
              //    })
              //  )
  }


}
