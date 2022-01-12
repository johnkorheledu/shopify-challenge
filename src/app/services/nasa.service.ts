import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap, throwError } from 'rxjs';
import { Photo } from '../models/Photo';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(private http: HttpClient) {}

  photosURL =
    'https://api.nasa.gov/planetary/apod?start_date=2021-12-01&api_key=CvbrRte9NV5n4Nl3D7sny2jYxsV8Ycrt5XTE8VBr';
  getAllImages() {
    return this.http.get<Photo[]>(this.photosURL);
  }
}
