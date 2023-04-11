import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneWayDataBindingComponent } from './one-way-data-binding/one-way-data-binding.component';
import { StringInterpolationComponent } from './one-way-data-binding/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './one-way-data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from './one-way-data-binding/event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    OneWayDataBindingComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
