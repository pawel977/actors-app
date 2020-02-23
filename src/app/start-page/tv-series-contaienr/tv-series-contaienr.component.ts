import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {TvSeries} from '../../enums/tv-series.interface';
import {TvSeriesService} from '../../services/tv-series.service';

@Component({
  selector: '' +
    'app-tv-series-contaienr',
  templateUrl: './tv-series-contaienr.component.html',
  styleUrls: ['./tv-series-contaienr.component.scss']
})
export class TvSeriesContaienrComponent implements OnInit {
  cards$: Observable<TvSeries[]>;

  constructor(private seriesService: TvSeriesService) { }

  ngOnInit() {
    this.cards$ = this.seriesService.getTvSeries();
  }

}
