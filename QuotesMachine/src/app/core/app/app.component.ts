import { Component, ViewEncapsulation } from '@angular/core';
import { QuotesComponent } from '../../shared/components/quotes/quotes.component';
import { AboutComponent } from '../../shared/components/about/about.component';
import { NavmenuComponent } from '../../shared/components/navmenu/navmenu.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  {
  name = 'Angular 5';
}
