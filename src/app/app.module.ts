// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Import this

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SmsPageComponent } from './sms-page/sms-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SmsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Add it here
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

