import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DetailsComponent } from './components/customers/info/details/details.component';
import { EditComponent } from './components/customers/info/edit/edit.component';
import { InfoComponent } from './components/customers/info/info.component';
import { OrderComponent } from './components/customers/info/order/order.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SettingComponent } from './components/setting/setting.component';
import { AuthenGuard } from './shared/authen.guard';

const routes: Routes = [
  { path: '', component:CustomersComponent},
  { path: 'customers', component:CustomersComponent},
  { path: 'info', component:InfoComponent},
  { path: 'customers/:id', component:DetailsComponent},
  { path: 'customers/:id/info/details', component:DetailsComponent},
  { path: 'customers/:id/info/order', component:OrderComponent},
  { path: 'customers/:id/info/edit', component:EditComponent, canActivate:[AuthenGuard]},
  { path: 'setting', component:SettingComponent},
  { path: 'login', component:AuthComponent},
  { path: '**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
