import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRoutingComponent } from './ng-routing.component';

describe('NgRoutingComponent', () => {
  let component: NgRoutingComponent;
  let fixture: ComponentFixture<NgRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
