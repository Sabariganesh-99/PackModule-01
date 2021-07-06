import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacklistCostComponent } from './packlist-cost.component';

describe('PacklistCostComponent', () => {
  let component: PacklistCostComponent;
  let fixture: ComponentFixture<PacklistCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacklistCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacklistCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
