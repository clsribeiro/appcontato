import { Component, OnInit } from '@angular/core';
import { CriarcontatoPage } from './../criarcontato/criarcontato.page';
import { ActionSheetController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {
  contatos = [
    {
      id: 1,
      nome: 'Cleiton Ribeiro',
      cep: '33010-000',
      rua: 'Rua Direita',
      bairro: 'Centro',
      cidade: 'Santa Luzia',
      estado: 'MG',
    },
    {
      id: 2,
      nome: 'Ricarte Elias',
      cep: '31160-900',
      rua: 'Avenida Cristiano Machado',
      bairro: 'União',
      cidade: 'Belo Horizonte',
      estado: 'MG',
    },
  ];

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  async deleteContatoAction(id: number){
    const buttons = [
      {
        text: 'Excluir Contato',
        role: 'destructive',
        handler: () => {
          this.deleteContatoAction(id);
        }
      }
    ];
    const actionSheet = await
    this.actionSheetController.create({
      header: 'Ações',
      // tslint:disable-next-line: object-literal-shorthand
      buttons: buttons
    });
    await actionSheet.present();
  }
  deleteContato(id: number){
      this.contatos = this.contatos.filter (t => t.id !== id);
  }
}
