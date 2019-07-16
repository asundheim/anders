import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomQueueComponent } from './bathroom-queue.component';

describe('BathroomQueueComponent', () => {
  let component: BathroomQueueComponent;
  let fixture: ComponentFixture<BathroomQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BathroomQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BathroomQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
