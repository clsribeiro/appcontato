import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-criarcontato',
  templateUrl: './criarcontato.page.html',
  styleUrls: ['./criarcontato.page.scss'],
})
export class CriarcontatoPage implements OnInit {
  public formularioNovoContato: NgForm;
  public formContato: NgForm;
  idFild: null;
  nomeFild: null;
  cepFild: null;
  ruaFild: null;
  bairroFild: null;
  cidadeFild: null;

  constructor(private alertController: AlertController) { // public formbuilder: FormBuilder
    // this.contatoForm = this.formbuilder.group({
    //  nome: [null, [Validators.required]],
    //  cep: [null, [Validators.required]],
    //  rua: [null, [Validators.required]],
    //  bairro: [null],
    //  cidade: [null, [Validators.required]]
    // });
  }

  ngOnInit() {
  }

  buscaCep(){
    console.log(this.formularioNovoContato['this.cepFild'].value);
  }
  async cadastrarContato(f: NgForm) {
    const message = 'Nome: ' + this.nomeFild +
                    '<br>Rua: ' + this.ruaFild +
                    '<br>Cidade: ' + this.cidadeFild;

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
          text: 'Salvar',
          handler: () => {
            console.log(this.nomeFild, this.cepFild, this.ruaFild, this.bairroFild, this.cidadeFild);
          }
        }
      ]
    });
    await alert.present();
  }
}
