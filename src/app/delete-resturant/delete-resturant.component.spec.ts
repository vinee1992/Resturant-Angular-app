import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteResturantComponent } from './delete-resturant.component';

describe('DeleteResturantComponent', () => {
  let component: DeleteResturantComponent;
  let fixture: ComponentFixture<DeleteResturantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteResturantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
