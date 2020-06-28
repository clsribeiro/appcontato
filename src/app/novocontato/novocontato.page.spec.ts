import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovocontatoPage } from './novocontato.page';

describe('NovocontatoPage', () => {
  let component: NovocontatoPage;
  let fixture: ComponentFixture<NovocontatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovocontatoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovocontatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
