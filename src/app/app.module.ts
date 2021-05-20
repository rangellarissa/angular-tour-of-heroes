import { HeroService } from './services/hero.service';
import { SideNavService } from './services/sidenav.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PortalModule} from '@angular/cdk/portal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CdkPortalOverviewExampleComponent } from './cdk-portal-overview-example/cdk-portal-overview-example.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SidenavComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CdkPortalOverviewExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    PortalModule,
  ],
  exports: [
    HeroesComponent,
    SidenavComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  providers: [SideNavService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
