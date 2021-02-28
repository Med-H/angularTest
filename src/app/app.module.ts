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
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/inMemory/in-memory-data.service';

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
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
