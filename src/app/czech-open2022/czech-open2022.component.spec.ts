import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CzechOpen2022Component } from './czech-open2022.component';

describe('CzechOpen2022Component', () => {
  let component: CzechOpen2022Component;
  let fixture: ComponentFixture<CzechOpen2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CzechOpen2022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CzechOpen2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
