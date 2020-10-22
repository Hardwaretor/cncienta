import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';


import { CookieLawModule } from 'angular2-cookie-law';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtInterceptor, ErrorInterceptor, } from './_helpers';


import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';


import { IotComponent } from './iot/iot.component';
import { FooterComponent } from './footer/footer.component';
import { MachineListComponent } from './machine-list/machine-list.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { CamListComponent } from './cam-list/cam-list.component';

import {WebcamModule} from 'ngx-webcam';
import { CameraComponent } from './camera/camera.component';
import { MachineComponent } from './machine/machine.component';
import { DeviceComponent } from './device/device.component';
import { NgxGaugeModule } from 'ngx-gauge';

import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutListComponent } from './checkout-list/checkout-list.component';
import { PaymentComponent } from './payment/payment.component';

import { StoreModule } from '@ngrx/store';
import { ShopReducer } from './store/reducer';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductListComponent,
    LoginComponent,
    RegisterComponent,
    ServicesComponent,
    AboutComponent,
    CheckoutComponent,
    IotComponent,
    FooterComponent,
    MachineComponent,
    MachineListComponent,
    DeviceListComponent,
    CamListComponent,
    CameraComponent,
    DeviceComponent,
    CheckoutListComponent,
    PaymentComponent,
    ProductComponent
    
    

  ],


  imports: [
    BrowserModule,
    HttpClientModule,
    CookieLawModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WebcamModule,
    ReactiveFormsModule,
    NgxGaugeModule,
    FormsModule,
    StoreModule.forRoot({ shop: ShopReducer })


  ],

  providers: [

    
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],

  bootstrap: [AppComponent],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

  
})


export class AppModule {


};

