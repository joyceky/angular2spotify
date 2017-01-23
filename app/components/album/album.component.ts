import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

import { Album } from '../../models/album';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html',
    styleUrls: ['../artist/artist.component.css'] // This should be changed later to use the album.component.css file
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
                        this.album = album;
                    })
            })
    }
}