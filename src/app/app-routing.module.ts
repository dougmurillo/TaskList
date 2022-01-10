import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    'path': 'todo',
    component: TodoComponent,
  },
  {
    'path': 'timer',
    loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
