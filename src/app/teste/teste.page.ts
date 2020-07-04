import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {

  contatos: Array<any>;
  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.listar();
  }
  listar(){
    this.contatoService.listar().valueChanges().subscribe(dados => this.contatos = dados);
  }

}
