import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YonexSeniorsCup2023Component } from './yonex-seniors-cup2023.component';

describe('YonexSeniorsCup2023Component', () => {
  let component: YonexSeniorsCup2023Component;
  let fixture: ComponentFixture<YonexSeniorsCup2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YonexSeniorsCup2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YonexSeniorsCup2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
