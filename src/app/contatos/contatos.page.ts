import { EditarPage } from './../editar/editar.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CriarcontatoPage } from './../criarcontato/criarcontato.page';
import { ActionSheetController, IonicModule, NavController, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { values } from 'lodash';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';




@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {
  contatos = [
    {
      _id: 1,
      nome: 'Cleiton Ribeiro',
      cep: '33010-000',
      rua: 'Rua Direita',
      bairro: 'Centro',
      cidade: 'Santa Luzia',
      estado: 'MG',
    },
    {
      _id: 2,
      nome: 'Vai Anitta',
      cep: '31160-900',
      rua: 'Avenida Cristiano Machado',
      bairro: 'União',
      cidade: 'Belo Horizonte',
      estado: 'MG',
    },
  ];
  contatosDb;

  constructor(private actionSheetController: ActionSheetController,
              public http: HttpClient, private navController: NavController) {
    this.contatosDb = [];
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log('Load');
    this.bucarDadosFirebase();
  }

   bucarDadosFirebase(){
     console.log('Teste');
     this.http.get<any>('https://projetosunibh.firebaseio.com/TESTE.json').subscribe(values);
  }

  editContato(id){
    console.log(id);
    this.navController.navigateForward('editar'); // Como passar o id por parametro e inserir eles no formulário da pag EDITAR
  }

  deleteContato(id: number){
      this.contatos = this.contatos.filter (t => t._id !== id);
  }

}
