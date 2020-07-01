import { Component, OnInit } from '@angular/core';
import { CriarcontatoPage } from './../criarcontato/criarcontato.page';
import { ActionSheetController, IonicModule } from '@ionic/angular';
import * as _ from 'lodash';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {
  tasks: any[] = [];
  todosContatos: any;
  queryText: string;
  contatos = [
    {
      id: 1,
      nome: 'Cleiton Ribeiro',
      cep: '33010-000',
      rua: 'Rua Direita',
      bairro: 'Centro',
      cidade: 'Santa Luzia',
      estado: 'MG',
    },
    {
      id: 2,
      nome: 'Ricarte Elias',
      cep: '31160-900',
      rua: 'Avenida Cristiano Machado',
      bairro: 'União',
      cidade: 'Belo Horizonte',
      estado: 'MG',
    },
  ];

  constructor(private actionSheetController: ActionSheetController) {
    let tasksJson = localStorage.getItem('tasksDb');
    if (tasksJson != null){
      this.tasks = JSON.parse(tasksJson);
   }
    this.queryText = '';
    this.todosContatos = this.contatos.lastIndexOf.name;
  }

  ngOnInit() {
  }
  /*
  filterNome(nome: any){
    let val = nome.target.value;
    if (val && val.trim() !== ''){
      this.contatos = _.values(this.todosContatos);
      this.contatos = this.contatos.filter((contatos) =>{
        return (contatos.nome.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) > -1);
      });
    } else{
      this.contatos = this.todosContatos;
    }

  }
  */

  async deleteContatoAction(id: number){
    const buttons = [
      {
        text: 'Excluir Contato',
        role: 'destructive',
        handler: () => {
          this.deleteContatoAction(id);
        }
      }
    ];
  }
  deleteContato(id: number){
      this.contatos = this.contatos.filter (t => t.id !== id);
      this.updateLocalStorage();
  }
  updateLocalStorage(){
    localStorage.setItem('tasksDB', JSON.stringify(this.tasks));
  }
}
