import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// able to use [(ngModel)]='' two way data binding
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OneComponentComponent } from './one-component/one-component.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
