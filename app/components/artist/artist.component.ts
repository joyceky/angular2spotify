import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../../models/Artist';
import { Album } from '../../models/Album';


@Component({
    moduleId: module.id,
    selector: 'artist',
    styleUrls: ['artist.component.scss'],
    templateUrl: 'artist.component.html'
})

export class ArtistComponent implements OnInit {
    id: string;
    artist: Artist[];
    albums: Album[];

    constructor(
        private spotifyService: SpotifyService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this.spotifyService.getArtist(id)
                    .subscribe(artist => {
                        this.artist = artist;
                    })
                this.spotifyService.getAlbums(id)
                    .subscribe(albums => {
                        this.albums = albums.items;
                    })
            })
    }
}
