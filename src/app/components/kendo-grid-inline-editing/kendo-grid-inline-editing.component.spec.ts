import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoGridInlineEditingComponent } from './kendo-grid-inline-editing.component';

describe('KendoGridInlineEditingComponent', () => {
  let component: KendoGridInlineEditingComponent;
  let fixture: ComponentFixture<KendoGridInlineEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoGridInlineEditingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoGridInlineEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
