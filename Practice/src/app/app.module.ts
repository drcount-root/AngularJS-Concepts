import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './OneWayDataBinding/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './OneWayDataBinding/property-binding/property-binding.component';
import { ClassAndStyleBindingComponent } from './OneWayDataBinding/class-and-style-binding/class-and-style-binding.component';
import { EventBindingComponent } from './OneWayDataBinding/event-binding/event-binding.component';
import { TemplateReferanceVariableComponent } from './OneWayDataBinding/template-referance-variable/template-referance-variable.component';
import { TwoWayComponent } from './TwoWayDataBinding/two-way/two-way.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NGSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    ClassAndStyleBindingComponent,
    EventBindingComponent,
    TemplateReferanceVariableComponent,
    TwoWayComponent,
    NgIfComponent,
    NGSwitchComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
