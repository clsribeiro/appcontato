import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-novocontato',
  templateUrl: './novocontato.page.html',
  styleUrls: ['./novocontato.page.scss'],
})
export class NovocontatoPage implements OnInit {

  formularioNovoContato: FormGroup;

  constructor(public formbuilder: FormBuilder){
    this.formularioNovoContato = this.formbuilder.group(
      {
        nome: [null, [Validators.required]],
        cep: [null, [Validators.required]],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]]
      }
    );
   }
  ngOnInit() {
  }
}
