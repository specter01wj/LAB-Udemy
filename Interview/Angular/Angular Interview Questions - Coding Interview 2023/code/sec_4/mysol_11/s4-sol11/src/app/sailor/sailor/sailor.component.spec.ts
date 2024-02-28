import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SailorComponent } from './sailor.component';

describe('SailorComponent', () => {
  let component: SailorComponent;
  let fixture: ComponentFixture<SailorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SailorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SailorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
