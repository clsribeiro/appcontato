
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
    private alertController: AlertController
    ) {}
    // public http: HttpClient
    // public formbuilder: FormBuilder
    // ){
    //  this.contatoForm = this.formbuilder.group({
    //    nome: [null, [Validators.required]],
    //    cep: [null, [Validators.required]],
    //    rua: [null, [Validators.required]],
    //    bairro: [null, [Validators.required]],
    //    cidade: [null, [Validators.required]]
    //  });
    // }
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
  /*
  buscarCep(formContato: NgForm){
    this.http.get('https://viacep.com.br/ws/${this.cep}/json/')
    .map(res => res.jason())
    .subscribe((data: any) => {
      console.log(data);
    });
  }
  */
}
