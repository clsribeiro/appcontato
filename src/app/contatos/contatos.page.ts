import { ContatoService } from './../contato.service';
import { NgForm } from '@angular/forms';
import { MapOperator } from 'rxjs/internal/operators/map';
import { Contato } from './../criarcontato/contato';
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



@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {
  formContato: NgForm;
  contato: Contato;

  constructor(private actionSheetController: ActionSheetController,
              public http: HttpClient,
              public router: Router,
              private navController: NavController,
              private db: AngularFireDatabase,
              private contatoService: ContatoService
              ) {
    this.contatos = [];
   }
  contatos: Contato[];
  ngOnInit() {
    this.db.list<Contato>('contatos').valueChanges().subscribe(contatos => {
      this.contatos = contatos;
    });
  }

  editContato(nome: string){
    console.log(nome);
    this.router.navigate(['editar', nome]); // Como passar o id por parametro e inserir eles no formulário da pag EDITAR
  }

  deleteContato(id: string){
    this.contatos = this.contatos.filter (t => t.nome !== id);
  }

}
