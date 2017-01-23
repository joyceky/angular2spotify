import { Component } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../model/artist';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [SpotifyService]
})

export class SearchComponent {
  searchStr: string;
  searchRes: Artist[];

  constructor(private spotifyService: SpotifyService) {

  }
  searchMusic() {
    console.log("f:searchMusic: ", this.searchStr);
    this.spotifyService.searchMusic(this.searchStr).subscribe(res => {
      // console.log(res.artists.items);
      this.searchRes = res.artists.items;
    })
  }
}