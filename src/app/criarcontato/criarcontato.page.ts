import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

import { Observable, throwError, Operator } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MapOperator } from 'rxjs/internal/operators/map';

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
  contatoForm: FormGroup;
  nome: null;
  cep: null;
  rua: null;
  bairro: null;
  cidade: null;
  formbuilder: any;
  constructor(
    private alertController: AlertController,
    public http: HttpClient
  ) {}
  ngOnInit() {
  }
  async enviarformulario(formContato: NgForm) {
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

  /* // METODO PARA BUSCAR CEP
  buscarCep(formContato: NgForm){
    this.http.get('https://viacep.com.br/ws/${this.cep}/json/')
    .map(res => res.jason())
    .subscribe((data: any) => {
      console.log(data);
    });
  }
  */

  /*
  buscarCep(formContato: NgForm){
    const consultaCEP = this.cep;
    console.log(this.http.get<any>('https://viacep.com.br/ws/' + consultaCEP + '/json/')) // https://viacep.com.br/ws/01001000/json/
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
    });
  }
  */


}
