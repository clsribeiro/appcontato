import { ContatoDataService } from './../../services/contato-data.service';
import { ContatoService } from './../../services/contato.service';
import { Router, RouterModule } from '@angular/router';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { AlertController, ActionSheetController, NavController } from '@ionic/angular';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { MapOperator } from 'rxjs/internal/operators/map';
import { Contato } from '../contatos/interfaces/contato';



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
  message: string ;


  constructor(
    private alertController: AlertController,
    public http: HttpClient,
    public actionSheetCtrl: ActionSheetController,
    public db: AngularFireDatabase,
    private contatoDataService: ContatoDataService,
    private contatoService: ContatoService,
    public navController: NavController,
    public router: Router
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
  async enviarformulario(){
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
              this.contatoDataService.changeContato(null, '' );
              console.log('Contato add no BD.');
              this.alertController.create({
                header: this.key === '' ? 'Cadastro realizado!' : 'Cadastro atualizado!',
                message: 'Deseja cadastrar um novo contato?',
                buttons: [
                    {
                      text: 'Sim',
                      role: 'cancel',
                      cssClass: 'secondary',
                      handler: () => {
                        this.message = 'Cadastro realizado!';
                        console.log('Formulario limpo para novo cadastro.');
                      }
                    },
                    {
                      text: 'Não',
                      handler: () => {
                             this.router.navigate(['contatos']);
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
      this.message += ' atualizado!';
    } else {
      this.contatoService.insert(this.contato);
      this.message = 'Cadastro realizado!';
    }
    this.contato = new Contato();
  }

  buscarCep(){
    console.log('O CEP eh:', this.contato.cep);
    this.contatoService.buscarCep(this.contato.cep).subscribe(value => {
      this.contato.rua = value.logradouro;
      this.contato.bairro = value.bairro;
      this.contato.cidade = value.localidade;
    });
  }

  delete(key: string){
    this.contatoService.delete(key);

  }
}
