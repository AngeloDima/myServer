import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentiComponent } from './studenti/studenti.component';
import { AddStudenteComponent } from './studenti/add-studente/add-studente.component';

const routes: Routes = [
  { path: "", component: StudentiComponent },
  { path: "creaStudente", component: AddStudenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
