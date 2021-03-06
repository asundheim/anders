import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyComponent } from './spotify.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ButtonModule, MessageService } from 'primeng/primeng';
import { ToastModule } from 'primeng/toast';

describe('SpotifyComponent', () => {
  let component: SpotifyComponent;
  let fixture: ComponentFixture<SpotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyComponent ],
      providers: [ HttpClient, HttpHandler, MessageService ],
      imports: [ ButtonModule, ToastModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
