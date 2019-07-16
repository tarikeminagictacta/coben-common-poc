import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CobenCommonPocModule } from '@coben/common';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CobenCommonPocModule, SidebarModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
