import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { NavbarComponent } from './components/navbar/navbar.component'
import { AboutComponent } from './components/about/about.component'
import { SearchComponent } from './components/search/search.component'


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
  // directives: [NavbarComponent] 
})

export class AppComponent  {  }
