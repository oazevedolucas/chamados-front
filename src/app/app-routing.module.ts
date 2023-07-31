import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerarSenhaComponent } from './gerar-senha/gerar-senha.component';
import { ChamarSenhaComponent } from './chamar-senha/chamar-senha.component';

const routes: Routes = [
  {path: 'senha', component: GerarSenhaComponent},
  {path: 'painel-chamado', component:  ChamarSenhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
