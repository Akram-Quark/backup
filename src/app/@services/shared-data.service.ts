import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private shearedData = new BehaviorSubject<string>('');
  constructor() {}
  send(data: string) {
    this.shearedData.next(data);
  }
  recieve(): Observable<string> {
    return this.shearedData.asObservable();
  }
}
