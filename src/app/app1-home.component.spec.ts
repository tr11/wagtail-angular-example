import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1HomeComponent } from './app1-home.component';

describe('App1HomeComponent', () => {
  let component: App1HomeComponent;
  let fixture: ComponentFixture<App1HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
