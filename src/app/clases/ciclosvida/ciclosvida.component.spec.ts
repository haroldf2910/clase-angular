import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclosvidaComponent } from './ciclosvida.component';

describe('CiclosvidaComponent', () => {
  let component: CiclosvidaComponent;
  let fixture: ComponentFixture<CiclosvidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiclosvidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclosvidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
