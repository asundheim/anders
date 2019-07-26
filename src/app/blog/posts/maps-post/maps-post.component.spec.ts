/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapsPostComponent } from './maps-post.component';

describe('MapsPostComponent', () => {
  let component: MapsPostComponent;
  let fixture: ComponentFixture<MapsPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
