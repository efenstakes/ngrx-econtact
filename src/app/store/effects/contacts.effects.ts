import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';


import { ContactService } from 'src/app/services/contact.service';
import * as ContactActions from '../actions/contact.action'


@Injectable()
export class ContactEffects {

    constructor(
        private actions$: Actions,
        private contactService: ContactService
    ) {}

    @Effect() loadContacts$: Observable<Action> = 
        this.actions$.pipe(
            ofType(ContactActions.ContactActionTypes.LOAD)

            
        );

}