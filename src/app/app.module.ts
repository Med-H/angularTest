import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeroComponentComponent } from './ui/hero-component/hero-component.component'
import { HeroDetailComponent } from './ui/hero-detail/hero-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroComponentComponent,
    HeroDetailComponent,
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
