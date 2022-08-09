import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailMeComponent } from './mail-me.component';

describe('MailMeComponent', () => {
  let component: MailMeComponent;
  let fixture: ComponentFixture<MailMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
