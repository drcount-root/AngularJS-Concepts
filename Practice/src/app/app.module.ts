import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './OneWayDataBinding/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './OneWayDataBinding/property-binding/property-binding.component';
import { ClassAndStyleBindingComponent } from './OneWayDataBinding/class-and-style-binding/class-and-style-binding.component';
import { EventBindingComponent } from './OneWayDataBinding/event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    ClassAndStyleBindingComponent,
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
