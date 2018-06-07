import { Component, OnInit, ViewEncapsulation} from '@angular/core';

// Models
import { Quote } from '../../models/quote';

// Services
import { QuoteService } from '../../../core/services/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['../../scss/main.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuotesComponent implements OnInit {

  status: string;
  //quote: Array<Quote>;
  quote: Quote;

  constructor(
    private _quoteService : QuoteService
  ) {

    this.status = '';
    //this.quote = new Array<Quote>();
    this.quote = new Quote({
      title: 'Steve Jobs statment',
      content: '"Picasso had a saying - "Good artists copy; great artists steal"'
    });
   }

  ngOnInit() {}

  onClickNext() {
    this.featchQuotes();
  }

  onClickShare() {
    if (!this.hasValueAny(this.quote)) return;

    if (this.quote.title != '' && this.quote.title != '') {
      this.status = `${this.quote.title} - ${this.quote.content}`;
    }
  }

  featchQuotes() {
    this._quoteService.getNew()
      .subscribe( res => res as Array<Quote> || []);
  }

  private hasValueAny(value: any): value is {} {
    return value !== null && value !== undefined;
  }
}
