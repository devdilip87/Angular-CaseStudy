import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTimerComponent } from './counter-timer.component';

describe('CounterTimerComponent', () => {
  let component: CounterTimerComponent;
  let fixture: ComponentFixture<CounterTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
