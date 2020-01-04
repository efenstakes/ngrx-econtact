import { createReducer, on } from "@ngrx/store";
import { Contact } from 'src/app/models/contact.model';

import * as ContactActions from '../actions/contact.action'

let initialState: Contact[] = [
   { id: 45, name: 'Ed mufasa' },
   { id: 56, name: 'Lily mufasa' },
]

// handle contact state
export const contactsReducer = createReducer(
    // initial state
    initialState,

    /**
     *  handle different actions 
     *  
    */

    // loading contacts
    on(
        ContactActions.loadContacts,
        (state)=> {
            return state;
        }
    ),

    // add contacts 
    on(
        // action type
        ContactActions.addContact,
        // the function to call to update state
        (state, action)=> {
            console.log('adding contact')
            return [ ...state, action.contact ]
        }
    )

)
