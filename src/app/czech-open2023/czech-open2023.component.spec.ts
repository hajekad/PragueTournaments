import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CzechOpen2023Component } from './czech-open2023.component';

describe('CzechOpen2023Component', () => {
  let component: CzechOpen2023Component;
  let fixture: ComponentFixture<CzechOpen2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CzechOpen2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CzechOpen2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
