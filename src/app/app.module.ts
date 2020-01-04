import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store';
import { contactsReducer } from './store/reducers/contact.reducer'
import { favContactsReducer } from './store/reducers/favcontacts.reducers'
import { ContactEffects } from './store/effects/contacts.effects'


// app pages and components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/pages/home/home.component';
import { ContactsComponent } from './layouts/pages/contacts/contacts.component';
import { FavContactsComponent } from './layouts/pages/fav-contacts/fav-contacts.component';
import { EffectsModule } from '@ngrx/effects';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    FavContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    StoreModule.forRoot({
      contacts: contactsReducer,
      favContacts: favContactsReducer
    }),
    EffectsModule.forRoot([ ContactEffects ]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
