import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

import { Album } from '../../model/album';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html',
    styleUrls: ['../artist/artist.component.css']
})

export class AlbumComponent implements OnInit {
    id: string;
    album: Album;

    constructor(
        private spotifyService: SpotifyService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this.spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album.items;
                    })
            })
    }
}