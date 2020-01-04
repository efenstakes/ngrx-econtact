import { createReducer, on } from "@ngrx/store";
import { Contact } from 'src/app/models/contact.model';

import * as ContactActions from '../actions/contact.action'

export interface ContactState {
    isLoading: boolean,
    contacts: Array<Contact>
}

// let initialState: Contact[] = [
//    { id: 45, name: 'Ed mufasa' },
//    { id: 56, name: 'Lily mufasa' },
// ]
let initialState: ContactState = {
    isLoading: false,
    contacts: [
        { id: 45, name: 'Ed mufasa' },
        { id: 56, name: 'Lily mufasa' },
     ]
}

// handle contact state
export const contactsReducer = createReducer(
    // initial state
    initialState,

    /**
     *  handle different actions 
     *  
    */

    // loading contacts
    // on(
    //     ContactActions.loadContacts,
    //     (state)=> {
    //         return state;
    //     }
    // ),
    
    // loading contacts
    on(
        ContactActions.loadContacts,
        (state)=> {
            return {
                contacts: [...state.contacts], isLoading: true
            };
        }
    ),

    // loading 
    on(
        ContactActions.loadingContacts,
        (state, action)=> {
            return {
                ...state, isLoading: true
            }
        }
    ),

     // loading contacts success
     on(
        ContactActions.loadContactsSuccess,
        (state, action)=> {
            return {
                contacts: [ ...state.contacts, ...action.contacts ],
                isLoading: false
            };
        }
    ),

    // add contacts 
    on(
        // action type
        ContactActions.addContact,
        // the function to call to update state
        (state, action)=> {
            console.log('adding contact')
            return {
                contacts: [ ...state.contacts, action.contact ],
                isLoading: false
            }
        }
    )

)
