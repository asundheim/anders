import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoormantandcComponent } from './doormantandc.component';

describe('DoormantandcComponent', () => {
  let component: DoormantandcComponent;
  let fixture: ComponentFixture<DoormantandcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoormantandcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoormantandcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
