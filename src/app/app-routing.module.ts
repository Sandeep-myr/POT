import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContractorRegistrationComponent } from './contractor-registration/contractor-registration.component';



const routes: Routes = [
  { path: 'about', component: AboutComponent },
  {path:'contractorReg',component:ContractorRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
