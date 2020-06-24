import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTwoComponent } from './route-two.component';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';



describe('RouteTwoComponent', () => {
  let component: RouteTwoComponent;
  let fixture: ComponentFixture<RouteTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteTwoComponent ],
      providers: [DataService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
