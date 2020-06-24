import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTimerComponent } from './counter-timer.component';
import { CounterService } from 'src/app/services/counter.service';

describe('CounterTimerComponent', () => {
  let component: CounterTimerComponent;
  let fixture: ComponentFixture<CounterTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterTimerComponent ],
      providers: [CounterService]
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
