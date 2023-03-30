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
import { NgRoutingComponent } from './ng-routing/ng-routing.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TvComponent } from './products/tv/tv.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { BuyProductsComponent } from './buy-products/buy-products.component';
import { ChildComponent } from './child/child.component';

// for going to the page of specific product

// const appRoutes: Routes = [
//   {
//     path: '',
//     redirectTo: 'login',
//     pathMatch: 'full',
//   },
//   {
//     path: 'home',
//     component: HomeComponent,
//   },
//   {
//     path: 'login',
//     component: LoginComponent,
//   },
//   {
//     path: 'about',
//     component: AboutUsComponent,
//   },
//   {
//     path: 'contacts',
//     component: ContactsComponent,
//   },
//   {
//     path: 'products',
//     children: [
//       {
//         path: '',
//         component: ProductsComponent
//       },
//       {
//         path: 'laptop',
//         component: LaptopComponent,
//       },
//       {
//         path: 'mobile',
//         component: MobileComponent,
//       },
//       {
//         path: 'tv',
//         component: TvComponent,
//       },
//       {
//         path: 'washing-machine',
//         component: WashingMachineComponent,
//       },
//     ],
//   },
//   {
//     path: '**',
//     component: PagenotfoundComponent,
//   },
// ];

// for viewing the specific product in a side of the all product page

const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  // },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'buy-products',
    component: ParentComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      // {
      //   path: '',
      //   component: ProductsComponent
      // },
      {
        path: 'laptop',
        component: LaptopComponent,
      },
      {
        path: 'mobile',
        component: MobileComponent,
      },
      {
        path: 'tv',
        component: TvComponent,
      },
      {
        path: 'washing-machine',
        component: WashingMachineComponent,
      },
    ],
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

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
    NgForComponent,
    NgRoutingComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    ContactsComponent,
    LoginComponent,
    PagenotfoundComponent,
    LaptopComponent,
    MobileComponent,
    TvComponent,
    WashingMachineComponent,
    CardComponent,
    ParentComponent,
    BuyProductsComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
