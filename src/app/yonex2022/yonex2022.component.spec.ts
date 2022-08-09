import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yonex2022Component } from './yonex2022.component';

describe('Yonex2022Component', () => {
  let component: Yonex2022Component;
  let fixture: ComponentFixture<Yonex2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Yonex2022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Yonex2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
