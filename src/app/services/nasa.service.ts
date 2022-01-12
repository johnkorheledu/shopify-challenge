import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap, throwError } from 'rxjs';
import { Photo } from '../models/Photo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(private http: HttpClient) {}

  photosURL =
    'https://api.nasa.gov/planetary/apod?start_date=2021-12-01&api_key=' +
    environment.NASA_API_KEY;
  getAllImages() {
    return this.http.get<Photo[]>(this.photosURL);
  }
}
