import { createReducer, on } from '@ngrx/store'
import * as FavContactsAction from '../actions/favcontacts.actions'

const initialState = []


export const favContactsReducer = createReducer(
  initialState,

  /**
   * handle actions
   */

  // add a fav contact
  on(
    FavContactsAction.addFavContact,
    (state, action)=> {
        return [ ...state, action.contact ]
    }
  ),

  // remove a contact
  on(
    FavContactsAction.removeFavContact,
    (state, action)=> {
        return state.filter((contact)=> contact.id != action.id)
    }
)

)