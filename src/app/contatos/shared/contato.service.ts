import { AngularFireDatabase } from '@angular/fire/database';
import { Contato } from './contato';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private db: AngularFireDatabase) { }

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
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  public delete(key: string) {
    this.db.object(`contatos/${key}`).remove();
  }
}
