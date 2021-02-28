import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { HeroComponentComponent } from './ui/hero-component/hero-component.component';
import { HeroDetailComponent } from './ui/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo : 'dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroComponentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
