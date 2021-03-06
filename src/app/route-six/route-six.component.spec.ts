import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSixComponent } from './route-six.component';
import { SharedService } from './shared.service';

describe('RouteSixComponent', () => {
  let component: RouteSixComponent;
  let fixture: ComponentFixture<RouteSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteSixComponent ],
      providers: [SharedService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
