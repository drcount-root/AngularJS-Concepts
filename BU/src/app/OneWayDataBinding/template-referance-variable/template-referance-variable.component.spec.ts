import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferanceVariableComponent } from './template-referance-variable.component';

describe('TemplateReferanceVariableComponent', () => {
  let component: TemplateReferanceVariableComponent;
  let fixture: ComponentFixture<TemplateReferanceVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateReferanceVariableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateReferanceVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
