import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

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
    ) {} // private http: HttpClient              //QUANDO EU COLOCO ESSE OBJETO NO CONSTRUTOR DA ERRO NA PAGINA E NAO CARREGA O FORMULÁRIO
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
            console.log(formContato.value);
          }
        }
      ]
    });
    await alert.present();
  }
  buscarCep(formContato: NgForm){
    console.log(this.cep);
  }
  /* METODO PARA BUSCAR CEP
  buscarCep(formContato: NgForm){
    this.http.get('https://viacep.com.br/ws/${this.cep}/json/')
    .map(res => res.jason())
    .subscribe((data: any) => {
      console.log(data);
    });
  }
  */
}
