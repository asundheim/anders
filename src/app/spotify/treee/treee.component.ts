import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/spotify.service';

@Component({
  selector: 'app-treee',
  templateUrl: './treee.component.html',
  styleUrls: ['./treee.component.scss']
})
export class TreeeComponent implements OnInit {

  isUp: boolean;
  loading = true;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getServerAuth().subscribe(response => {
      console.log(response);
      this.spotifyService.getCurrentlyPlaying(response.access_token).subscribe(current => {
        console.log(current);
        if (current.context) {
          this.spotifyService.getPlaylistData(response.access_token, current.context.uri.split(':')[4]).subscribe(playlist => {
            console.log(playlist);
            this.spotifyService.getUpStatus().subscribe(upStatus => {
              this.isUp = playlist.name === 'fuzzyfeelin' || upStatus.status;
              this.loading = false;
              if (this.isUp) {
                this.spotifyService.notify().subscribe(() => {});
              }
            });
          });
        } else {
          this.loading = false;
          this.isUp = false;
        }
      });
    });
  }

}
