import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterResturantComponent } from './register-resturant.component';

describe('RegisterResturantComponent', () => {
  let component: RegisterResturantComponent;
  let fixture: ComponentFixture<RegisterResturantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterResturantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
