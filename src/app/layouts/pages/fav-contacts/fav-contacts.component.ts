import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'


import { Store } from '@ngrx/store'
import { AppState } from '../../../store/index.store'
import { removeFavContact } from '../../../store/actions/favcontacts.actions'
import { Contact } from 'src/app/models/contact.model';


@Component({
  selector: 'app-fav-contacts',
  templateUrl: './fav-contacts.component.html',
  styleUrls: ['./fav-contacts.component.scss']
})
export class FavContactsComponent implements OnInit {

  contacts$: Observable<Array<Contact>>

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.contacts$ = this.store.select('favContacts')
  }

}
