import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BioComponent} from './bio/bio.component';
import { BioDetailsComponent } from './bio-details/bio-details.component';
import {BioCreateComponent} from './bio-create/bio-create.component';
import {MyFormComponent} from './my-form/my-form.component';

const routes: Routes =[
  {path:'', component: HomeComponent},
  {path:'bio', component: BioComponent},
  {path:'bio/:id', component: BioDetailsComponent},
  {path:'create-bio', component:BioCreateComponent},
  {path:'my-form', component:MyFormComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
		  exports: [RouterModule]
})
export class AppRoutingModule { }
