import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TutosComponent } from './pages/tutos/tutos.component';
import { TdComponent } from './pages/td/td.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { TutoComponent } from './pages/tuto/tuto.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tutos',
    component: TutosComponent
  },
  {
    path: 'tutos/:tuto',
    component: TutoComponent
  },
  {
    path: 'td',
    component: TdComponent
  },
  {
    path: 'about',
    component: AboutMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
