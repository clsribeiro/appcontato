import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contato } from '../pages/contatos/interfaces/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoDataService {
  private contatoSource = new BehaviorSubject({ contato: null, key: '' });
  currentContato = this.contatoSource.asObservable();

  constructor() { }

  changeContato(contato: Contato, key: string) {
    // tslint:disable-next-line: object-literal-shorthand
    this.contatoSource.next({ contato: contato, key: key });
  }
}

