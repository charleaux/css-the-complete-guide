import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { StartHostingComponent } from './start-hosting/start-hosting.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'start-hosting', component: StartHostingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
