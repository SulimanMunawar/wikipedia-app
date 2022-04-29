import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  private base_url = "https://en.wikipedia.org/w/api.php";

  constructor(private http: HttpClient) {  }

  search(data:any){
    return this.http.get(this.base_url, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        srsearch: data,
        origin: '*',
        srlimit: 100
      }
    })
  }
}
