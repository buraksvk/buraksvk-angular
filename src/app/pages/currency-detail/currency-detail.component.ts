import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyDetailService } from './currency-detail.service';
import { PriceModelItems } from 'src/app/data/price.localdata'

declare const TradingView: any;

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.css']
})

export class CurrencyDetailComponent implements OnInit, AfterViewInit {
  routeId: any
  PriceItems: any = [];
  PriceInfo: any = [];
  constructor(private activatedRoute: ActivatedRoute, private currency: CurrencyDetailService) {
    this.activatedRoute.paramMap.subscribe(x => {
      this.routeId = x.get('id');
    });

    this.currency.getData().subscribe(data => {
      console.log(data)

      // Error => Access to XMLHttpRequest at 'https://pro-api.coinmarketcap.com/v1/exchange/market-pairs/latest' from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    })
  }

  ngOnInit(): void {
    this.PriceItems = PriceModelItems;
    PriceModelItems.forEach((item) => {
      if (item.coin === this.routeId) {
        this.PriceInfo = item;
      }
    })
  }

  ngAfterViewInit() {
    new TradingView.widget({
      'container_id': 'technical-analysis',
      'autosize': true,
      'symbol': this.routeId,
      'interval': '120',
      'timezone': 'exchange',
      'theme': 'Dark',
      'style': '1',
      'toolbar_bg': '#f1f3f6',
      'withdateranges': true,
      'hide_side_toolbar': false,
      'allow_symbol_change': true,
      'save_image': false,
      'hideideas': true,
      'studies': [
        'MASimple@tv-basicstudies'],
      'show_popup_button': true,
      'popup_width': '1000',
      'popup_height': '650'
    });
  }
}
