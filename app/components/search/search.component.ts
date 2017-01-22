import { Component } from '@angular/core';
<<<<<<< HEAD
import { SpotifyService } from '../../services/spotify.service'

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [SpotifyService]

})

export class SearchComponent  {  
  searchStr:string;

  constructor(private spotifyService:SpotifyService) {

  }

  searchMusic() {
    console.log(this.searchStr);
    this.spotifyService.searchMusic(this.searchStr).subscribe(res => {
        console.log(res.artists.items);
      })
  }
}
=======
import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId:module.id,
  selector: 'search',
  templateUrl: `search.component.html`,
  providers: [SpotifyService]
})

export class SearchComponent  { 
searchStr: string;
constructor(private spotifyService:SpotifyService){

}
   searchMusic() {
     console.log("f:searchMusic: ", this.searchStr);
     this.spotifyService.searchMusic(this.searchStr).subscribe(res => {
        console.log(res.artists.items);
     })
   }
}


>>>>>>> origin/tps-part1
