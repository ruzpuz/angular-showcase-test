import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShirtsComponent } from './list-shirts.component';

describe('ListShirtsComponent', () => {
  let component: ListShirtsComponent;
  let fixture: ComponentFixture<ListShirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListShirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
