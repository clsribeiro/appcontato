import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-testnggroup',
  templateUrl: './testnggroup.page.html',
  styleUrls: ['./testnggroup.page.scss'],
})
export class TestnggroupPage implements OnInit { //
  private todo: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
   });
  }
  logForm(){
    console.log(this.todo.value);
  }
  ngOnInit() {
  }
}
