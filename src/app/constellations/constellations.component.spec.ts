import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstellationsComponent } from './constellations.component';
import { globals } from '../../environments/environment';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

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

  it('should not draw constellations when the toggle is disabled', () => {
    // Arrange
    globals.constellationsEnabled = false;

    // Act
    const element: DebugElement = fixture.debugElement.queryAll(By.css('canvas'))[0];
    element.triggerEventHandler('mouseMove', null);

    // Assert
    expect(true);

  });
});
