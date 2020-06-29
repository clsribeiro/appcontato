import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-criarcontato',
  templateUrl: './criarcontato.page.html',
  styleUrls: ['./criarcontato.page.scss'],
})
export class CriarcontatoPage implements OnInit {
  nomeFild: null;
  cepFild: null;
  ruaFild: null;
  bairroFild: null;
  cidadeFild: null;
  constructor(
    private alertController: AlertController
    ){ }
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
