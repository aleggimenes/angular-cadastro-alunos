import { Component, OnInit } from '@angular/core';
import { Contato} from '../contato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
  }
  salvar(nome: string, telefone: string){
this.contatoService.insert({ nome, telefone} as Contato);
}

}