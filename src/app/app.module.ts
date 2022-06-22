import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'**',component:ErrorComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
