import { createAction, props } from '@ngrx/store'
import { Contact } from 'src/app/models/contact.model'




// 
export enum ContactActionTypes {
    ADD = '[Contacts] Add Contact',
    LOAD = '[Contacts] Load Contacts',
    LOADING = '[Contacts] Loading Contacts',
    LOAD_SUCCESS = '[Contacts] Load Contacts Success',
    LOAD_ERROR = '[Contacts] Load Contacts Error'
}


// loading contacts
export const loadingContacts = createAction(
    ContactActionTypes.LOADING, 
    props<{}>()
)


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

// error
export const loadContactsError = createAction(
    ContactActionTypes.LOAD_ERROR, 
    props<{ }>()
)


// add a contact
export const addContact = createAction(
    ContactActionTypes.ADD, 
    props<{ contact: Contact }>()
)