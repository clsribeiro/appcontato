import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-novocontato',
  templateUrl: './novocontato.page.html',
  styleUrls: ['./novocontato.page.scss'],
})
export class NovocontatoPage implements OnInit {
  nomeFild: null;
  cepFild: null;
  ruaFild: null;
  bairroFild: null;
  cidadeFild: null;
  formularioNovoContato: FormGroup;

  constructor(
    public formbuilder: FormBuilder,
    private alertController: AlertController
    ){
    this.formularioNovoContato = this.formbuilder.group(
      {
        nome: [null, [Validators.required]],
        cep: [null, [Validators.required]],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]]
      }
    );
   }
  ngOnInit() {
  }


  async enviarformulario(f: NgForm) {

    const message = 'Contato: ' + this.nomeFild +
                    '<br>Rua: ' + this.ruaFild +
                    '<br>Cidade: ' + this.ruaFild;

    const alert = await this.alertController.create({
      header: 'Confirme os dados:',
      message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Canceled');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Alert Confirmed');
          }
        }
      ]
    });
    await alert.present();
  }
}
