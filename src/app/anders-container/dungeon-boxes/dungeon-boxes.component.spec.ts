import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonBoxesComponent } from './dungeon-boxes.component';

describe('DungeonBoxesComponent', () => {
  let component: DungeonBoxesComponent;
  let fixture: ComponentFixture<DungeonBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
