import { values } from 'lodash';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { Endereco } from './endereco';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Optional } from '@angular/core';
import { Observable, throwError, Operator } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MapOperator } from 'rxjs/internal/operators/map';
import { DatePipe, formatDate } from '@angular/common';
import { ContatoDataService } from '../contatos/shared/contato-data.service';
import { Contato } from '../contatos/shared/contato';
import { ContatoService } from '../contatos/shared/contato.service';



@Component({
  selector: 'app-criarcontato',
  templateUrl: './criarcontato.page.html',
  styleUrls: ['./criarcontato.page.scss'],
})
export class CriarcontatoPage implements OnInit {
  formContato: NgForm;
  formbuilder: any;
  idContato = new Date();
  key = '' ;
  contato: Contato;


  constructor(
    private alertController: AlertController,
    public http: HttpClient,
    public actionSheetCtrl: ActionSheetController,
    private datePipe: DatePipe,
    public db: AngularFireDatabase,
    private contatoDataService: ContatoDataService,
    private contatoService: ContatoService,
  )
  { }
  ngOnInit() {

    this.contato = new Contato();
    this.contatoDataService.currentContato.subscribe(data => {
      if (data.contato && data.key) {
        this.contato = new Contato();
        this.contato.nome = data.contato.nome;
        this.contato.bairro = data.contato.bairro;
        this.contato.cep = data.contato.cep;
        this.contato.cidade = data.contato.cidade;
        this.contato.rua = data.contato.rua;
        this.key = data.key;
        }
      });
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
            console.log('Dados do formulario cancelado.');
          }
        }, {                  // CRIAR CONTATO
          text: 'Ok',
          handler: () => {
            console.log('Contato:', this.contato);
            this.onSubmit().then(() => {
              this.contato = {} as Contato;
              console.log('Contato add no BD.');
              this.alertController.create({
                header: this.key ? 'Cadastro atualizado!' : 'Cadastro realizado!',
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

  async onSubmit(){
    if (this.key) {
      this.contatoService.update(this.contato, this.key);
    } else {
      this.contatoService.insert(this.contato);
    }
    this.contato = new Contato();
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



/*
1) Botão de deletar;
2) Limpar observador;
3) Corrigir pastas;
*/