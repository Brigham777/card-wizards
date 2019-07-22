import { StudyComponent } from './study-components/study/study.component';
import { DecksComponent } from './ui-components/decks/decks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 
const routes: Routes = [
  { path: '', component: DecksComponent },
  { path: 'study/:id', component: StudyComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }