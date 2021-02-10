import { Component, Input ,OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
@Input() filmName: string;
@Input() filmOnAir : string ;
@Input() filmAffiche : string ;
@Input() index: number ;
@Input() id: number ;
  constructor(
    private Film: FilmService
  ) { }

  ngOnInit() {
  }
  
  getOnAir() {
    return this.filmOnAir;
  }
  onWatchFilm(){
  console.log('Nothing is free in this world');
  }
  
   changeColor(){

    switch (this.filmOnAir) {
      case "Tank":
        return "blue";
        case "Healer":
          return "green";
          case"DPS":
          return "red";
        
    
      default:
        return "black";
    }
  // if(this.filmOnAir == 'Blu-Ray'){
  //   return 'blue';
  // }else if(this.filmOnAir == 'En salle') {
  //   return 'red';
  // }else{
  //  console.log('Error : Unexpected onAir value')
  // }
  
   }
  onSwitch(){
    if(this.filmOnAir == 'En salle'){
      this.Film.switchOnBR(this.index);
    } else if(this.filmOnAir == 'Blu-Ray'){
      this.Film.switchOnAir(this.index);
    }else{
      console.log('Error : Unknown onAir Type');
    }
  }
}
