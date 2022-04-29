import { Component } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wikipedia-search-app';
  searchTerm: any;
  results:any = []; // empty array

  page: number = 1;
  totalResults: any = []; // total count of search result will be pushed here 

  constructor(private wiki: WikiService){}

  onSubmit(){
    this.wiki.search(this.searchTerm).subscribe( (res:any) =>{
     this.results = res.query.search;
     this.totalResults = res.query.search.length;
     console.log("Total Search Items: ", this.totalResults);
     console.log(this.results);
    })
  }


}
