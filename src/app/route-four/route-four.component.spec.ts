import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFourComponent } from './route-four.component';

import { CounterService } from './../services/counter.service';

describe('RouteFourComponent', () => {
  let component: RouteFourComponent;
  let fixture: ComponentFixture<RouteFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteFourComponent ],
      providers: [CounterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
