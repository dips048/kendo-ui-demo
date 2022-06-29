import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoGridBasicComponent } from './kendo-grid-basic.component';

describe('KendoGridBasicComponent', () => {
  let component: KendoGridBasicComponent;
  let fixture: ComponentFixture<KendoGridBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoGridBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoGridBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
