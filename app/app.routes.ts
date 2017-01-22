import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';

const appRoutes: Routes = [
    {
        path: '', // The path of '' matches the site root
        component: SearchComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const RouteList: ModuleWithProviders = RouterModule.forRoot(appRoutes);