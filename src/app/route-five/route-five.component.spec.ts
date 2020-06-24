import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFiveComponent } from './route-five.component';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';

describe('RouteFiveComponent', () => {
  let component: RouteFiveComponent;
  let fixture: ComponentFixture<RouteFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteFiveComponent ],
      providers: [DataService ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
