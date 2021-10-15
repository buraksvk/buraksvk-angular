import { Component, OnInit } from '@angular/core';
import { PriceModelItems } from 'src/app/data/price.localdata'

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  PriceItems: any = [];
  constructor() { }

  ngOnInit(): void {
    this.PriceItems = PriceModelItems
  }

}
