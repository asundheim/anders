import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstellationsComponent } from './constellations.component';

describe('ConstellationsComponent', () => {
  let component: ConstellationsComponent;
  let fixture: ComponentFixture<ConstellationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstellationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstellationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
