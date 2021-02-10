import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  filmSubject = new Subject<any[]>();
  private films =[
    {
     id:1, 
     name: 'Dark Knight',
     onAir: 'Tank',
     affiche: 'https://i.redd.it/etvasoabp3e51.jpg',
    },
      {
     id:2,    
     name: 'Mage Blanc',
     onAir: 'Healer',
     affiche: 'https://preview.redd.it/0ji0atvqijy41.jpg?width=960&crop=smart&auto=webp&s=bea70a591168b4f449320aebc3f20365b185e424',
    },
      {
     id:3,   
     name: 'Samurai',
     onAir: 'DPS',
     affiche: 'https://i.kym-cdn.com/photos/images/newsfeed/001/398/474/1eb.jpg',
    },
   
    ];
  
  emitFilmSubject(){
    this.filmSubject.next(this.films.slice());
  }

    setOnAir() {
    for (const i of this.films) {
      i.onAir = 'En salle';
    }
    this.emitFilmSubject();
    }

    setOnBR() {
    for (const iterator of this.films) {
      iterator.onAir ='Blu-Ray';
    }
    this.emitFilmSubject();
    }

    switchOnAir(index: number){
    this.films[index].onAir = 'En salle';
    this.emitFilmSubject();
    }

    switchOnBR(index: number){
      this.films[index].onAir = 'Blu-Ray';
      this.emitFilmSubject();
    }

    getFilmById(id: number){
      for (const tmp of this.films) {
        if (tmp.id == id) {
          return tmp;
        } else{
          console.log('No id');
          return null;
        }
      }
    }
}
    // getFilm() {
    //   this.http.get<any>('/api/movies').subscribe((res) =>{
    //     this.films = res;
    //     this.emitFilmSubject();
    //   });
    // } 

    // modifFilm(film: any){

    // }
