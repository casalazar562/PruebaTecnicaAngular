import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImagesService } from 'src/app/service/images.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images:any[]=[];
  form: FormGroup;
  constructor(
    private imagesService: ImagesService,
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnInit() {
    // this.getImages();
  }

  private buildForm() {

    this.form = this.formBuilder.group({

      word: ['', [Validators.required]],
    });
    this.form.valueChanges
    .pipe(
      debounceTime(350),
    )
    .subscribe(data => {
    });
  }

  get wordField() {
    return this.form.get('word');
  }
  get cateoryField() {
    return this.form.get('category');
  }

  // función para traer las imagenes por las palabras ingresadas en el input.
  getImages(){

  this.imagesService.getImages( document.getElementById('word')['value']).subscribe((data: any[]) => {

      this.images=data;
      console.log(this.images, 'data');
    },
      error => {
        console.log('There was an error while retrieving data !!!', error);
      });

    }

    // metodo para traer las imagenes por categoria las cuales se eligen en el select.
  getImagesSelect(){

  this.imagesService.getImagesSelect( document.getElementById('category')['value']).subscribe((data: any[]) => {

      this.images=data;
      console.log(this.images, 'data');
    },
      error => {
        console.log('There was an error while retrieving data !!!', error);
      });

    }



}
