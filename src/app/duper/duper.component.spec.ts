import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuperComponent } from './duper.component';

describe('DuperComponent', () => {
  let component: DuperComponent;
  let fixture: ComponentFixture<DuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
