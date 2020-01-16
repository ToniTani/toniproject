import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PokemonService} from '../service/pokemon.service';
import {Observable} from 'rxjs';
import {Album} from './album';

@Component({
  selector: 'app-finnkino',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [PokemonService]
})

export class AlbumsComponent implements OnInit {

  public cinemaData$: Observable<Album[]>;
  searchTerm: string;

  constructor(private service: PokemonService, ) {}

  ngOnInit() {
    this.cinemaData$ = this.service.getData();
     // .subscribe(data => this.albums = data);
  }
}


