import { Component } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [SpotifyService]
})

export class SearchComponent {

    searchStr: string;

    constructor(private spotifyService: SpotifyService) {

    }

    searchMusic() {
        console.log("Running searchMusic..." + this.searchStr);

        // This returns an observable so we have to subscribe to it
        this.spotifyService.searchMusic().subscribe(res => {
                console.log(res.artists.items)
            });
    }
}