import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacklistDaysvalidityComponent } from './packlist-daysvalidity.component';

describe('PacklistDaysvalidityComponent', () => {
  let component: PacklistDaysvalidityComponent;
  let fixture: ComponentFixture<PacklistDaysvalidityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacklistDaysvalidityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacklistDaysvalidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
