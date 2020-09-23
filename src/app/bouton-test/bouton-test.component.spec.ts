import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonTestComponent } from './bouton-test.component';

describe('BoutonTestComponent', () => {
  let component: BoutonTestComponent;
  let fixture: ComponentFixture<BoutonTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
