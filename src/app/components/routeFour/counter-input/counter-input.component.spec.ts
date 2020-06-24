import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterInputComponent } from './counter-input.component';
import { CounterService } from 'src/app/services/counter.service';
import Utils from 'src/app/utils/utils';

describe('CounterInputComponent', () => {
  let component: CounterInputComponent;
  let fixture: ComponentFixture<CounterInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterInputComponent ],
      providers: [CounterService, Utils]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
