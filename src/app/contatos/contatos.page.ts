import { EditarPage } from './../editar/editar.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CriarcontatoPage } from './../criarcontato/criarcontato.page';
import { ActionSheetController, IonicModule, NavController, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { values } from 'lodash';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Contato } from '../criarcontato/contato';




@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {

  contatos: Contato[];


  constructor(private actionSheetController: ActionSheetController,
              public http: HttpClient,
              public router: Router,
              private navController: NavController,
              private db: AngularFireDatabase,
              ) {
    this.contatos = [];
   }

  ngOnInit() {
    this.db.list<Contato>('contatos').valueChanges().subscribe(contatos => {
      this.contatos = contatos;
    });
  }

  ionViewWillEnter(){
    console.log('Load');
    this.bucarDadosFirebase();
  }

   bucarDadosFirebase(){
     console.log('Teste');
     this.http.get<any>('https://projetosunibh.firebaseio.com/TESTE.json').subscribe(values);
  }

  editContato(nome:string){
    console.log(nome);
    this.router.navigate(['editar', nome]); // Como passar o id por parametro e inserir eles no formulário da pag EDITAR
  }

  deleteContato(id: string){
      this.contatos = this.contatos.filter (t => t.nome !== id);
  }

}
