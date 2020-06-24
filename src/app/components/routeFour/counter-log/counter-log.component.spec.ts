import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterLogComponent } from './counter-log.component';
import { CounterService } from 'src/app/services/counter.service';
import Utils from 'src/app/utils/utils';

describe('CounterLogComponent', () => {
  let component: CounterLogComponent;
  let fixture: ComponentFixture<CounterLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterLogComponent ],
      providers: [ CounterService, Utils ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
