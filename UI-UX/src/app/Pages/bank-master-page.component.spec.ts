import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankMasterPageComponent } from './bank-master-page.component';

describe('BankMasterPageComponent', () => {
  let component: BankMasterPageComponent;
  let fixture: ComponentFixture<BankMasterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankMasterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankMasterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
