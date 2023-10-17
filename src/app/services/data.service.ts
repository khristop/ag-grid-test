import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T[];
}

@Injectable({providedIn: 'root'})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get<Response<any>>('assets/data.json')
      .pipe(
        map(res => res?.data)
      );
  }
}
