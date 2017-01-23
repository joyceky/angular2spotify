import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';

const appRoutes: Routes = [
    {
        path: '', // The path of '' matches the site root
        component: SearchComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'artist/:id',
        component: ArtistComponent    
    },
    {
        path: 'album/:id',
        component: AlbumComponent    
    }
];

export const RouteList: ModuleWithProviders = RouterModule.forRoot(appRoutes);