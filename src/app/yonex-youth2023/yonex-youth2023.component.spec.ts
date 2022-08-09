import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YonexYouth2023Component } from './yonex-youth2023.component';

describe('YonexYouth2023Component', () => {
  let component: YonexYouth2023Component;
  let fixture: ComponentFixture<YonexYouth2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YonexYouth2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YonexYouth2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
