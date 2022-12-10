import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { RegisterComponent } from './pages/register/register.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';

const routes: Routes = [
  {path : "", redirectTo : "register", pathMatch : "full" },
  {path : "users/:userId/lists", component : TaskViewComponent, canActivate: [AuthGuard]},
  {path : "users/:userId/lists/:listId", component:TaskViewComponent, canActivate: [AuthGuard]},
  {path : "users/:userId/new-list", component : NewListComponent, canActivate: [AuthGuard]},
  {path : "users/:userId/lists/:listId/new-task", component : NewTaskComponent, canActivate: [AuthGuard]},
  {path : "register", component : RegisterComponent},
  {path : "login", component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
