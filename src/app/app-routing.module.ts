import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardGuard } from './service/guard/route-guard.guard';
import { TodoComponent } from './todo/todo.component';
const routes: Routes = [
  { path: '', component: LoginComponent }, //canActivat//routeGuard
  { path: 'login', component: LoginComponent, canActivate: [RouteGuardGuard] },
  {
    path: 'welcome/:name',
    component: WelcomeComponent,
    canActivate: [RouteGuardGuard],
  },
  {
    path: 'todos',
    component: ListTodosComponent,
    canActivate: [RouteGuardGuard],
  },
  { path: 'logout', component: LogoutComponent },
  { path: 'todo', component: TodoComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
