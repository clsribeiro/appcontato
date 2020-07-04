import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  contatosUrl = 'https://projetosunibh.firebaseio.com/contatos';

  constructor(public http: HttpClient, public db: AngularFireDatabase) {}
  listar(){
    return this.db.list<any[]>(`${this.contatosUrl}`);
  }
}
