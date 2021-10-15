import { Component, OnInit } from '@angular/core';
import { PriceModelItems } from 'src/app/data/price.localdata'
import { OurClientsItems } from 'src/app/data/our-clients.localdata';
import { BlockchainTechnologyItems } from 'src/app/data/blockchain-technology.localdata';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  PriceItems: any = [];
  ClientItems: any = [];
  BlockchainItems: any = [];
  marketCounter = 0;
  blockchainCounter = 0;
  clientCounter = 0;
  priceType: any = "monthly"
  priceArray: any = { pro: 10, king: 20 }
  constructor() {

  }
  ngOnInit(): void {
    this.PriceItems = PriceModelItems;
    this.ClientItems = OurClientsItems;
    this.BlockchainItems = BlockchainTechnologyItems;
  }

  changePriceType(type: string) {
    this.priceType = type
    if(type === "yearly"){
      this.priceArray = { pro: ((10*12)/2), king: ((20*12)/2) }
    }
    else{
      this.priceArray = { pro: 10, king: 20 }
    }
  }

  marketPrev() {
    if (this.marketCounter !== 0) {
      this.marketCounter -= 1;
    }
  }
  marketNext() {
    if (!(this.marketCounter >= this.ClientItems.length - 1)) {
      this.marketCounter += 1;
    }
  }
  clientPrev() {
    if (this.clientCounter !== 0) {
      this.clientCounter -= 1;
    }
  }
  clientNext() {
    if (!(this.clientCounter >= this.ClientItems.length - 1)) {
      this.clientCounter += 1;
    }
  }
  clientSelect(index: number) {
    this.clientCounter = index;
  }

  blockchainPrev() {
    if (this.blockchainCounter !== 0) {
      this.blockchainCounter -= 1;
    }
  }
  blockchainNext() {
    if (!(this.blockchainCounter >= this.BlockchainItems.length - 1)) {
      this.blockchainCounter += 1;
    }
  }
  blockchainSelect(index: number) {
    this.blockchainCounter = index;
  }
}
