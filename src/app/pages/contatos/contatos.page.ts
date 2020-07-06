import { NgForm } from '@angular/forms';
import { Component, OnInit} from '@angular/core';
import { CriarcontatoPage } from './../criarcontato/criarcontato.page';
import { ActionSheetController, IonicModule, NavController, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { RouterModule, Routes, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Contato } from './interfaces/contato';
import { ContatoService } from '../../services/contato.service';
import { ContatoDataService } from '../../services/contato-data.service';




@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {
  formContato: NgForm;
  contato: Contato;
  contatos: Observable<any>;

  constructor(private actionSheetController: ActionSheetController,
              public http: HttpClient,
              public router: Router,
              private navController: NavController,
              private db: AngularFireDatabase,
              private contatoService: ContatoService,
              private contatoDataService: ContatoDataService,
              ) {

   }

  ngOnInit() {

    this.contatos = this.contatoService.getAll();
    console.log(this.contatos);
  }
  editContato(contato){
   this.contatoDataService.changeContato(contato, contato.key );
   this.router.navigate(['criarcontato']);
  }
  public delete(key: string) {
    this.db.object(`contatos/${key}`).remove();
  }
}
