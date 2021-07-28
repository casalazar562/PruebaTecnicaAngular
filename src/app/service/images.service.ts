import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  //  'Access-Control-Allow-Origin':'*',
  })
};
@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  public getImages(q:string){

    return this.http.get<any[]>('https://pixabay.com/api/?key=22676509-95c011ceaee3774fddbeab2ec&q='+q);
  }
  public getImagesSelect(category:string){

    return this.http.get<any[]>('https://pixabay.com/api/?key=22676509-95c011ceaee3774fddbeab2ec&category='+category);
  }
}
