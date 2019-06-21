import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor() { }

  setStorage(key,value){
        localStorage.setItem(key,value);
  }
  getStorage (key){
    return localStorage.getItem(key);

  }
}
