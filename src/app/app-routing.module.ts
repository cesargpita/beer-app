import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/beers', pathMatch: 'full' },
  { path: 'beers', component: BeerListComponent },
  { path: '**', component: BeerListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
