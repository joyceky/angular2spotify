// Ability to use dependency injection in this service
import {Injectable} from '@angular/core';

// Use of http calls
import {Http, Headers} from '@angular/http';

// ReactiveX Extensions for javascript - Asynchronous javascript extensions
import 'rxjs/add/operator/map';

@Injectable()

export class SpotifyService {

    private searchUrl: string;

    constructor(private http: Http) {
        console.log("SpotifyService Initialized...");
    }

    searchMusic(str: string, type='artist') {
        this.searchUrl = "https://api.spotify.com/v1/search?query=" + str + "&offset=0&limit=20&type=" + type + "&market=US";

        return this.http.get(this.searchUrl)
            .map(res => res.json());
    }
}