import { Contact } from '../models/contact.model';



export interface AppState {
   contacts: Contact[],
   favContacts: Contact[]   
}