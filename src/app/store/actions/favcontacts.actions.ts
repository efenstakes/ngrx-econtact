import { createAction, props } from '@ngrx/store'
import { Contact } from 'src/app/models/contact.model'


export enum FavContactsActionTypes {
    ADD = '[Contacts] Add',
    REMOVE = '[Contacts] Remove'
} 

export const addFavContact = createAction(
    FavContactsActionTypes.ADD, 
    props<{ contact: Contact }>()
)

export const removeFavContact = createAction(
    FavContactsActionTypes.REMOVE,
    props<{ id: Number }>()
)