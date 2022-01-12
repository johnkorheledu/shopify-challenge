import { Component, OnInit } from '@angular/core';
import { NasaService } from './services/nasa.service';
import { map, Observable } from 'rxjs';
import { Photo } from './models/Photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'shopify-challenge';
  regularDistribution = 100 / 3;
  photos: Photo[];
  constructor(private nasa: NasaService) {}
  isClicked = false;
  ngOnInit() {
    console.log('test');
    this.nasa
      .getAllImages()
      .subscribe(
        (val: Photo[]) => ((this.photos = val), console.log(this.photos))
      );
  }
}
