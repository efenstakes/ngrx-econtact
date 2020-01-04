import { createAction, props } from '@ngrx/store'
import { Contact } from 'src/app/models/contact.model'




// 
export enum ContactActionTypes {
    ADD = '[Contacts] Add Contact',
    LOAD = '[Contacts] Load Contacts',
    LOAD_SUCCESS = '[Contacts] Load Contacts Success',
}


// request contacts to be loaded 
export const loadContacts = createAction(
    ContactActionTypes.LOAD, 
    props<{}>()
)

// called when contacts are successfully loaded
export const loadContactsSuccess = createAction(
    ContactActionTypes.LOAD_SUCCESS, 
    props<{ contacts: Array<Contact> }>()
)


// add a contact
export const addContact = createAction(
    ContactActionTypes.ADD, 
    props<{ contact: Contact }>()
)