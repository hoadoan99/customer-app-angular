import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { DetailsComponent } from './components/customers/info/details/details.component';
import { EditComponent } from './components/customers/info/edit/edit.component';
import { InfoComponent } from './components/customers/info/info.component';
import { OrderComponent } from './components/customers/info/order/order.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component:CustomersComponent},
  { path: 'customers', component:CustomersComponent},
  { path: 'info', component:InfoComponent},
  { path: 'customers/:id', component:DetailsComponent},
  { path: 'customers/:id/info/details', component:DetailsComponent},
  { path: 'customers/:id/info/order', component:OrderComponent},
  { path: 'customers/:id/info/edit', component:EditComponent},
  { path: 'setting', component:CustomersComponent},
  { path: '**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
