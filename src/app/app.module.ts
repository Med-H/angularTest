import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeroComponentComponent } from './ui/hero-component/hero-component.component'
import { HeroDetailComponent } from './ui/hero-detail/hero-detail.component';
import { MessagesComponent } from './ui/messages/messages.component';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroComponentComponent,
    HeroDetailComponent,
    MessagesComponent,
    NavigationComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
