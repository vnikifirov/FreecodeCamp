import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from '../core/app/app.component';
import { QuotesComponent } from '../shared/components/quotes/quotes.component';
import { AboutComponent } from '../shared/components/about/about.component';
import { NavmenuComponent } from '../shared/components/navmenu/navmenu.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CategoriesComponent } from '../shared/components/categories/categories.component';

// Services
import { QuoteService } from '../core/services/quote.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'quotes-machine/Categories', pathMatch: 'full' },
      { path: '', component: CategoriesComponent },
      { path: 'quotes-machine/Quote', component: QuotesComponent },
      { path: 'quotes-machine/About', component: AboutComponent },
      { path: 'quotes-machine/Categories', component: CategoriesComponent }
    ])
  ],

  declarations: [
    AppComponent,
    QuotesComponent,
    AboutComponent,
    NavmenuComponent,
    CategoriesComponent,
    FooterComponent
  ],

  bootstrap: [ AppComponent ],

  providers: [ QuoteService ]
})

export class AppModule { }
