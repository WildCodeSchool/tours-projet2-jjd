import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablishementComponent } from './etablishement.component';

describe('EtablishementComponent', () => {
  let component: EtablishementComponent;
  let fixture: ComponentFixture<EtablishementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtablishementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtablishementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
