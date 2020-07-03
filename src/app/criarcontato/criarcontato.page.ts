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



@Component({
  selector: 'app-criarcontato',
  templateUrl: './criarcontato.page.html',
  styleUrls: ['./criarcontato.page.scss'],
})
export class CriarcontatoPage implements OnInit {
  formContato: NgForm;
  contato: Contato;
  formbuilder: any;
  constructor(
    private alertController: AlertController,
    public http: HttpClient,
    public actionSheetCtrl: ActionSheetController,
    public db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.contato = {} as Contato;
  }


  // CRIAR CONTATO
  async enviarformulario(formContato: NgForm){
    const message = 'Contato: ' + this.contato.nome +
                    '<br>Rua: ' + this.contato.rua +
                    '<br>Cidade: ' + this.contato.cidade;
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
        }, {                  // CRIAR CONTATO
          text: 'Ok',
          handler: () => {
            console.log(this.contato);
            this.db.database.ref('/contatos').push(this.contato).then(() => {
              this.contato = {} as Contato;
              this.alertController.create({
                header: 'Cadastro realizado!',
                message: 'Deseja cadastrar um novo contato?',
                buttons: [
                    {
                      text: 'Sim',
                      role: 'cancel',
                      cssClass: 'secondary',
                      handler: () => {
                        console.log('Cancelado');
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
    // console.log(this.cep);
    this.http.get<Endereco>(`https://viacep.com.br/ws/${this.contato.cep}/json/`).subscribe(value => {
      this.contato.rua = value.logradouro;
      this.contato.bairro = value.bairro;
      this.contato.cidade = value.localidade;
    });
  }
}
