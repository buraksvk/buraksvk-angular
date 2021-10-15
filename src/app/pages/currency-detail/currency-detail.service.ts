import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CurrencyDetailService {

  constructor(private http: HttpClient) { }

  getData(){
    const httpOptions = {
      headers: new HttpHeaders({
        'X-CMC_PRO_API_KEY':  "5b063d99-fe22-4e35-8192-b075b28c5a9d",
        'Access-Control-Allow-Origin': '*'
      })
    }
    let url = "https://pro-api.coinmarketcap.com/v1/exchange/market-pairs/latest"
    return this.http.get(url, httpOptions)
  }

}
