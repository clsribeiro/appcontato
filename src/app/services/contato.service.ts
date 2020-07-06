import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Contato } from '../pages/contatos/interfaces/contato';
import { Endereco } from '../pages/contatos/interfaces/endereco';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private db: AngularFireDatabase, private http: HttpClient) { }

  insert(contato: Contato) {
    this.db.list('contatos').push(contato)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(contato: Contato, key: string) {
    this.db.list('contatos').update(key, contato)
      .catch((error: any) => {
        console.error(error);
      });
  }
  getAll() {
    return this.db.list('contatos')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }));
        })
      );
  }

  public delete(key: string) {
    this.db.object(`contatos/${key}`).remove();
  }

  buscarCep(cep: string){
    return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
