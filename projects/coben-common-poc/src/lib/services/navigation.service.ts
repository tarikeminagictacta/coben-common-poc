import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NavigationService {

  constructor(private httpClient: HttpClient) {

  }

  public init(): Observable<any> {
    return this.httpClient.get('assets/navigation.json');
  }

}
