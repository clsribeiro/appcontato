import { values } from 'lodash';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { Endereco } from './endereco';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

import { Observable, throwError, Operator } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MapOperator } from 'rxjs/internal/operators/map';
import { Contato } from './contato';
import { DatePipe, formatDate } from '@angular/common';



@Component({
  selector: 'app-criarcontato',
  templateUrl: './criarcontato.page.html',
  styleUrls: ['./criarcontato.page.scss'],
})
export class CriarcontatoPage implements OnInit {
  formContato: NgForm;
  contato: Contato;
  formbuilder: any;
  idContato = new Date();
  constructor(
    private alertController: AlertController,
    public http: HttpClient,
    public actionSheetCtrl: ActionSheetController,
    private datePipe: DatePipe,
    public db: AngularFireDatabase
  ) { }
  ngOnInit() {
    this.contato = {} as Contato;
    this.contato.id = this.datePipe.transform(this.idContato, 'yyyyMMddHHmmss');
  }


  // CRIAR CONTATO
  async enviarformulario(formContato: NgForm){
    const message = 'Contato: ' + this.contato.nome +
                    '<br>Rua: ' + this.contato.rua +
                    '<br>Cidade: ' + this.contato.cidade +
                    '<br>ID: ' + this.contato.id;
    const alert = await this.alertController.create({
      header: 'Confirme os dados:',
      message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Dados do formulario cancelado.');
          }
        }, {                  // CRIAR CONTATO
          text: 'Ok',
          handler: () => {
            console.log('Contato:', this.contato);
            this.db.database.ref('/contatos').push(this.contato).then(() => {
              this.contato = {} as Contato;
              console.log('Contato add no BD.');
              this.alertController.create({
                header: 'Cadastro realizado!',
                message: 'Deseja cadastrar um novo contato?',
                buttons: [
                    {
                      text: 'Sim',
                      role: 'cancel',
                      cssClass: 'secondary',
                      handler: () => {
                        console.log('Formulario limpo para noco cadastro.');
                      }
                    },
                    {
                      text: 'Não',
                      handler: () => {
                        history.back();
                      }
                    }
                ]
              }).then(a => a.present());
            });
          }
        }
      ]
    });
    await alert.present();
  }
  buscarCep(formContato: NgForm){
    console.log('O CEP eh:', this.contato.cep);
    this.http.get<Endereco>(`https://viacep.com.br/ws/${this.contato.cep}/json/`).subscribe(value => {
      this.contato.rua = value.logradouro;
      this.contato.bairro = value.bairro;
      this.contato.cidade = value.localidade;
    });
  }
}
