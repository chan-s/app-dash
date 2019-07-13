import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { InicioComponent } from './view/pages/inicio/inicio.component';
import { NvabarComponent } from './view/common/nvabar/nvabar.component';
import { SidebarComponent } from './view/common/sidebar/sidebar.component';
import { HeaderComponent } from './view/common/header/header.component';
import { FooterComponent } from './view/common/footer/footer.component';
import { RightsidebarComponent } from './view/common/rightsidebar/rightsidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NvabarComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    RightsidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
