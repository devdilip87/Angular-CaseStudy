import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteOneComponent } from './route-one.component';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';

describe('RouteOneComponent', () => {
  let component: RouteOneComponent;
  let fixture: ComponentFixture<RouteOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteOneComponent ],
      providers: [DataService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
