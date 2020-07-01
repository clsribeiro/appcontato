import { Endereco } from './endereco';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

import { Observable, throwError, Operator } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MapOperator } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-criarcontato',
  templateUrl: './criarcontato.page.html',
  styleUrls: ['./criarcontato.page.scss'],
})
export class CriarcontatoPage implements OnInit {
  formContato: NgForm;
  nome: string;
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  formbuilder: any;
  constructor(
    private alertController: AlertController,
    public http: HttpClient,
    public actionSheetCtrl: ActionSheetController
  ) { }

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
    this.http.get<Endereco>(`https://viacep.com.br/ws/${this.cep}/json/`).subscribe(value =>{
      this.rua = value.logradouro;
      this.cidade = value.uf;
      this.bairro = value.bairro;
    });
  }
}
