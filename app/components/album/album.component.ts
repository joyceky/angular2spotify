import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../../models/Artist';
import { Album } from '../../models/Album';


@Component({
    moduleId: module.id,
    selector: 'album',
    styleUrls: ['album.component.scss'],
    templateUrl: 'album.component.html'
})

export class AlbumComponent implements OnInit {
    id: string;
    artist: Artist[];
    album: Album[];

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
