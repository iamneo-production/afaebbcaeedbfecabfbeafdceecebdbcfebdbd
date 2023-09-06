import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyformComponent } from './currencyform.component';

describe('CurrencyformComponent', () => {
  let component: CurrencyformComponent;
  let fixture: ComponentFixture<CurrencyformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyformComponent]
    });
    fixture = TestBed.createComponent(CurrencyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
