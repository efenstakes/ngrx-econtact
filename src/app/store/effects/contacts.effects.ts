import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';


import { ContactService } from 'src/app/services/contact.service';
import * as ContactActions from '../actions/contact.action'
import { mergeMap, map, catchError } from 'rxjs/operators';


@Injectable()
export class ContactEffects {

    constructor(
        private actions$: Actions,
        private contactService: ContactService
    ) {}

    @Effect()
    loadContacts$ = 
        this.actions$.pipe(
            ofType(ContactActions.ContactActionTypes.LOAD),

            mergeMap(
                ()=> 
                    // ContactActions.loadingContacts()
                    this.contactService.getContacts()
                        .pipe(

                            map((contacts) =>{
                                // let contact_objects = contacts.map((cont)=> { id: cont['id'], name: cont['name'] })
                                return ContactActions.loadContactsSuccess({ contacts: contacts })
                            } ),

                            // catchError((error)=> {
                            //     return of(ContactActions.loadContactsError())
                            // })

                        )
                
            )

        );

}