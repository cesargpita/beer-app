import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  beers$: Observable<any> = of(null);

  constructor(private serv: BeerService) { }

  ngOnInit(): void {
    this.beers$ = this.serv.getList();
  }

}
