import { Injectable } from '@angular/core';
// import { Giphy } from './giphy';
import {Giphy} from '../giphy';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  getGiphys() {
    return Giphy;
  }
  constructor() { }
}
