import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GerarSenhaComponent } from './gerar-senha/gerar-senha.component';
import { ChamarSenhaComponent } from './chamar-senha/chamar-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    GerarSenhaComponent,
    ChamarSenhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
