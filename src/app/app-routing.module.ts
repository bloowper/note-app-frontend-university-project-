import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {SignInComponent} from "./components/sign/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sign/sign-up/sign-up.component";
import {SinkComponent} from "./components/sink/sink.component";
import {TaskMainScreenComponent} from "./components/tasks/task-main-screen/task-main-screen.component";

const routes: Routes = [
    {path: '', redirectTo: '/homepage', pathMatch: 'full'},
    {path: 'homepage', component: HomepageComponent},
    {path: 'signin', component: SignInComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'sink', component: SinkComponent},
    {path: 'tasks', component:TaskMainScreenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
