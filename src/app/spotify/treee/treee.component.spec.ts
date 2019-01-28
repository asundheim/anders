import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeeComponent } from './treee.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('TreeeComponent', () => {
  let component: TreeeComponent;
  let fixture: ComponentFixture<TreeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeeComponent ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
