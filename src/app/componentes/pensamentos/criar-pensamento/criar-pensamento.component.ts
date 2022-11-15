import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  //Property Biding
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo2'
}

  constructor() { }

  ngOnInit(): void {
  }


  // Event Biding
  criarPensamento(){
    alert("Pensamento criado!");
  }

  cancelar(){
    alert("Ação cancelada!");
  }
}
