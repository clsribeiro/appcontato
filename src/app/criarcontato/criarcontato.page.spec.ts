import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarcontatoPage } from './criarcontato.page';

describe('CriarcontatoPage', () => {
  let component: CriarcontatoPage;
  let fixture: ComponentFixture<CriarcontatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarcontatoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarcontatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
