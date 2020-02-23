import {Component, Input, OnInit} from '@angular/core';
import {TvSeries} from '../../../enums/tv-series.interface';

@Component({
  selector: 'app-tv-serier-item',
  templateUrl: './tv-serier-item.component.html',
  styleUrls: ['./tv-serier-item.component.scss']
})
  export class TvSerierItemComponent implements OnInit {
  @Input() data: TvSeries;

  constructor() { }

  ngOnInit() {
  }

}
