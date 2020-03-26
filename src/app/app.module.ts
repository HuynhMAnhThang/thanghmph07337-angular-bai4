import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCompComponent } from './homeComp/homeComp.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductServicesService } from './services/product-services.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeCompComponent,
      ProductListComponent,
      ProductDetailComponent,

   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      
   ],
   providers: [ProductServicesService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
