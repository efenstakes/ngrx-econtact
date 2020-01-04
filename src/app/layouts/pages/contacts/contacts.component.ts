import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid'

import { AppState } from '../../../store/index.store'
import { addFavContact } from '../../../store/actions/favcontacts.actions'
import { addContact, loadContacts } from '../../../store/actions/contact.action'

import { Contact } from '../../../models/contact.model'
import { ContactService } from 'src/app/services/contact.service';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  name: String = ''
  contacts$: Observable<Array<Contact>>

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.contacts$ = this.store.select('contacts')
    this.store.dispatch( loadContacts({}) )
  }

  addToFavContacts(contact: Contact) {
    this.store.dispatch( addFavContact({contact}) )
  }

  addContact() {
    console.log('add cntact cmpt fun called')
    let contact: Contact = {
      id: uuid(), name: this.name
    }
    console.log('add ', contact)
    this.store.dispatch( addContact({ contact }) )
  }

  goToFavContacts() {
    this.router.navigate([ 'contacts', 'fav'])
  }



}
