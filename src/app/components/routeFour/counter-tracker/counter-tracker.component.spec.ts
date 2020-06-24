import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTrackerComponent } from './counter-tracker.component';
import { CounterService } from 'src/app/services/counter.service';
import Utils from 'src/app/utils/utils';

describe('CounterTrackerComponent', () => {
  let component: CounterTrackerComponent;
  let fixture: ComponentFixture<CounterTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterTrackerComponent ],
      providers: [CounterService, Utils]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
