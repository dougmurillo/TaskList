import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountdownModule } from 'ngx-countdown';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TodoComponent } from './todo/todo.component';
import { TimerComponent } from './timer/timer.component';
import { InputComponent } from './todo/shared/input/input.component';
import { CheckboxComponent } from './todo/shared/checkbox/checkbox.component';
import { ButtonComponent } from './todo/shared/button/button.component';
import { TimeComponent } from './timer/shared/time/time.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    TimerComponent,
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
