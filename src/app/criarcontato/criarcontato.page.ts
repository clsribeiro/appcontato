import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

import { Observable, throwError, Operator } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MapOperator } from 'rxjs/internal/operators/map';
// import 'rxjs/add/operator/map';


// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators/map';
// import { MergeMapOperator } from 'rxjs/internal/operators/mergeMap';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-criarcontato',
  templateUrl: './criarcontato.page.html',
  styleUrls: ['./criarcontato.page.scss'],
})
export class CriarcontatoPage implements OnInit {
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
  tasks: any[] = [];
  formContato: NgForm;
  nome: null;
  cep: null;
  rua: null;
  bairro: null;
  cidade: null;
  formbuilder: any;
  constructor(
    private alertController: AlertController,
    public http: HttpClient,
    public actionSheetCtrl: ActionSheetController
  ) {
    let tasksJson = localStorage.getItem('tasksDb');
    if (tasksJson != null){
      this.tasks = JSON.parse(tasksJson);
    }
  }


  ngOnInit() {}



  async enviarformulario(formContato: NgForm){
    const message = 'Contato: ' + this.nome +
                    '<br>Rua: ' + this.rua +
                    '<br>Cidade: ' + this.cidade;
    const alert = await this.alertController.create({
      header: 'Confirme os dados:',
      message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log(formContato.value); // Fazer funcao para enviar para backend
          }
        }
      ]
    });
    await alert.present();
  }

  buscarCep(formContato: NgForm){
    // console.log(this.cep);
      console.log(this.http.get<any>('https://viacep.com.br/ws/' + this.cep + '/json/'));
    }


  /*
  async openActions(tasks: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Excluir contato?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado');
          }
        }, {
          text: 'Sim',
          handler: () => {
            console.log('Sim'); // Fazer funcao para enviar para backend
          }
        }
      ]
    });
    */







    // METODO DELETAR CONTATO
    deleteContato(id: number){
      this.contatos = this.contatos.filter (t => t.id !== id);
      this.updateLocalStorage();
    }

    updateLocalStorage(){
      localStorage.setItem('tasksDB', JSON.stringify(this.tasks));
    }






}
