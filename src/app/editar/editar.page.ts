import { CriarcontatoPage } from './../criarcontato/criarcontato.page';
import { Component, OnInit } from '@angular/core';
import { Contato } from '../criarcontato/contato';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  contato: Contato;
  constructor() { }

  ngOnInit() {
  }

}
