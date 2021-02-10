import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-modif',
  templateUrl: './film-modif.component.html',
  styleUrls: ['./film-modif.component.css']
})
export class FilmModifComponent implements OnInit {
   film : any;
  constructor(
    private Film: FilmService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.film = this.Film.getFilmById(id);
  }

}
