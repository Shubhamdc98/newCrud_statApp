import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetCustomerComponent } from './components/get-customer/get-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { RouterModule, Routes } from '@angular/router';
import { PostComponentComponent } from './components/post-component/post-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path:"customer", component: PostComponentComponent},
  {path:"", component: GetCustomerComponent},
  {path:"customer/:id", component: UpdateCustomerComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    GetCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    PostComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
