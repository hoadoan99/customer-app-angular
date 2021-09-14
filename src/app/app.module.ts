import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CardViewsComponent } from './components/customers/card-views/card-views.component';
import { ListViewsComponent } from './components/customers/list-views/list-views.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AuthComponent } from './components/auth/auth.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InfoComponent } from './components/customers/info/info.component';
import { DetailsComponent } from './components/customers/info/details/details.component';
import { OrderComponent } from './components/customers/info/order/order.component';
import { AddComponent } from './components/customers/info/add/add.component';
import { EditComponent } from './components/customers/info/edit/edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, NgForm} from '@angular/forms';
import { SettingComponent } from './components/setting/setting.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomersComponent,
    CardViewsComponent,
    ListViewsComponent,
    AuthComponent,
    NotFoundComponent,
    InfoComponent,
    DetailsComponent,
    OrderComponent,
    AddComponent,
    EditComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
