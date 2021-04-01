import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsComponent} from './forms/forms.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  { path: 'pdf', component: PdfComponent },
  { path: 'forms', component: FormsComponent },
  {path: '', redirectTo: 'forms', pathMatch: 'full'}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


