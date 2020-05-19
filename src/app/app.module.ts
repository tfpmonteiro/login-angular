import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './login/input.component';

@NgModule({
  // componentes, diretivas e pipes
  declarations: [
    AppComponent,
    InputComponent,
  ],
  // outros módulos
  imports: [
    BrowserModule,
  ],
  // serviços
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
