import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// app pages
import { ContactsComponent } from './layouts/pages/contacts/contacts.component';
import { FavContactsComponent } from './layouts/pages/fav-contacts/fav-contacts.component';
import { HomeComponent } from './layouts/pages/home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/fav', component: FavContactsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
