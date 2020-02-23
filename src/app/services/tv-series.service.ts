import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {TvSeries} from '../enums/tv-series.interface';

@Injectable({
  providedIn: 'root'
})
export class TvSeriesService {

  constructor() { }

  getTvSeries(): Observable<TvSeries[]> {
    return of([
      {
        id: 1,
        tytul: "Czarnobyl",
        opis: "Po wybuchu elektrowni jądrowej w Czarnobylu ratownicy poświęcają zdrowie i życie, by ratować Europę przed skutkami katastrofy."
      },
      {
        id: 2,
        tytul: "Gra o tron",
        opis: "Adaptacja sagi George'a R.R. Martina. W królestwie Westeros walka o władzę, spiski oraz zbrodnie są na porządku dziennym."
      },
      {
        id: 3,
        tytul: "Breaking bad",
        opis: "Gdy nauczyciel chemii dowiaduje się, że ma raka, postanawia rozpocząć produkcję metamfetaminy, by finansowo zabezpieczyć swoją rodzinę."
      }
    ])
  }
}
