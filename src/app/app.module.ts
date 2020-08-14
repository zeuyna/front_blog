import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { ListTutoComponent } from './components/list-tuto/list-tuto.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { TutosComponent } from './pages/tutos/tutos.component';
import { ListTdComponent } from './components/list-td/list-td.component';
import { ListMatiereComponent } from './components/list-matiere/list-matiere.component';
import { FooterComponent } from './components/footer/footer.component';
import { TdComponent } from './pages/td/td.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { TutoComponent } from './pages/tuto/tuto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListTutoComponent,
    TutosComponent,
    ListTdComponent,
    ListMatiereComponent,
    FooterComponent,
    TdComponent,
    AboutMeComponent,
    TutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
