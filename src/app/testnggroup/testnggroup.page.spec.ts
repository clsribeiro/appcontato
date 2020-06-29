import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestnggroupPage } from './testnggroup.page';

describe('TestnggroupPage', () => {
  let component: TestnggroupPage;
  let fixture: ComponentFixture<TestnggroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestnggroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestnggroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
