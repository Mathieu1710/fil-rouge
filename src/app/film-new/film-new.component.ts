import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-new',
  templateUrl: './film-new.component.html',
  styleUrls: ['./film-new.component.css']
})
export class FilmNewComponent implements OnInit {
  newFilm: any;
  constructor(
    private Film: FilmService
  ) { }

  ngOnInit() {
    this.newFilm={
        title:null,
        affiche:null,
        onAir:null,
        synopsis:null,
        date:null
    };
  }
     onSaveFilm(){
       console.log('New Film', this.newFilm);
     }

}
