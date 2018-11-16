import { TestBed, inject } from '@angular/core/testing';

import { SpotifyService } from './spotify.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('SpotifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([SpotifyService], (service: SpotifyService) => {
    expect(service).toBeTruthy();
  }));
});
