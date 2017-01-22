import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
<<<<<<< HEAD
export class SpotifyService {

    private searchUrl: string;

    constructor(private http: Http){
        console.log('SpotifyService Initialized...');
    }

    searchMusic(str:string, type='artist') {
        this.searchUrl = "https://api.spotify.com/v1/search?query=" + str + "&offset=0&limit=20&type=" + type + "&market=US";        return this.http.get(this.searchUrl)
            .map(res => res.json());
    }
}
=======
export class SpotifyService{
    private searchUrl:string;
constructor(private _http:Http) {
    console.log("s:SpotifyService init");
    
}

searchMusic(str: string, type='artist') {
    //this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+'type+&market=us';
    this.searchUrl = "https://api.spotify.com/v1/search?query=" + str + "&offset=0&limit=20&type=" + type + "&market=US";
    return this._http.get(this.searchUrl)
    .map(res => res.json());
}
}

>>>>>>> origin/tps-part1
