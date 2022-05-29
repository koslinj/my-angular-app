import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DodatkowyComponent } from './dodatkowy/dodatkowy.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { TemplateDrivenFormComponent } from './Components/template-driven-form/template-driven-form.component';
//import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    DodatkowyComponent,
    //TemplateDrivenFormComponent,
    //ReactiveFormComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
