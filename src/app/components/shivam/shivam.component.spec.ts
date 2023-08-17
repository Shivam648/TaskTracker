import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShivamComponent } from './shivam.component';

describe('ShivamComponent', () => {
  let component: ShivamComponent;
  let fixture: ComponentFixture<ShivamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShivamComponent]
    });
    fixture = TestBed.createComponent(ShivamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
