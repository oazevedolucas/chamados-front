import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-chamar-senha',
  templateUrl: './chamar-senha.component.html',
  styleUrls: ['./chamar-senha.component.css']
})
export class ChamarSenhaComponent {

  chamarSenha: boolean = true;

  codigoSenha: String[] = [ 'N03', 'N02', 'P04', 'N01'];
  nomeDestino: String[] = ['Eglauco - ATENDIMENTO', 'Amanda - GUICHE 04', 'Afonso - GUICHE 02', 'Paulo - RADIOLOGIA' ];

  constructor(
    private changeDetection: ChangeDetectorRef
  ) { }

  ngOnInit() {
    setTimeout(() => {
      const msg = new SpeechSynthesisUtterance(
        "N04 Francisco - GUICHE 02"
      );
      msg.rate = 0.85;
      window.speechSynthesis.speak(msg);
      this.chamarSenha = false
    }
    ,4200);
    setTimeout(() =>{
      this.codigoSenha = ['N04', 'N03', 'N02', 'P04']
      this.nomeDestino = ['Francisco - GUICHE 02', 'Eglauco - ATENDIMENTO', 'Amanda - GUICHE 04', 'Afonso - GUICHE 02']
      this.codigoSenha = this.codigoSenha.filter(codigoSenha => codigoSenha !== 'N01');
      this.nomeDestino = this.nomeDestino.filter(nomeDestino => nomeDestino !== 'Paulo - RADIOLOGIA');
      this.chamarSenha = true;
      this.changeDetection.detectChanges();
    } ,8000); 
  }

  trocarSenhas():void {
    
  }
}
