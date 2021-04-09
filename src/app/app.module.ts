import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateBoxComponent } from './date-box/date-box.component';
import { NumberBoxComponent } from './number-box/number-box.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxCleaveDirectiveModule} from 'ngx-cleave-directive';
import { DemoMaterialModule } from './modules/material.module';
import { DemoPrimengModule } from './modules/primeng.module';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DateBoxComponent,
    NumberBoxComponent,
    MenuComponent,
    SubMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxCleaveDirectiveModule,
    DemoMaterialModule,
    DemoPrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
