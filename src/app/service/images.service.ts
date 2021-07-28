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

  // metodo para consumir api y traer los resultados por palabras clave, recibe como parametro una variable de tipo string 
  public getImages(q:string){

    return this.http.get<any[]>('https://pixabay.com/api/?key=22676509-95c011ceaee3774fddbeab2ec&q='+q);
  }

  // metodo para consumir api y traer los valores por categoria, recibe una variable de tipo string
  public getImagesSelect(category:string){

    return this.http.get<any[]>('https://pixabay.com/api/?key=22676509-95c011ceaee3774fddbeab2ec&category='+category);
  }
}
