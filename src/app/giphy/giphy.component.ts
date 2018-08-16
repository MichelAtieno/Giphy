import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  giphy$;
  gif: any;
  constructor( private http: HttpClient) {
    }

  ngOnInit() {
// interface ApiResponse {
    //   type: string;
    //   url: string;
    this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=7QRBKFkper4nhz6r7s80uzsIJBNGESPX&limit=30&rating=G').subscribe(data => {
         this.giphy$ = data.data;
            console.log(data);
        // this.giphy = new Giphy (data[0].type, data.url)
        
    });
  }

}
