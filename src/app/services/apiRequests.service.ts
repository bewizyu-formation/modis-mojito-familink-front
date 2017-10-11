import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';


import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

import Contact from '../models/Contact';
import Conversation from '../models/Conversation';
import Coordonne from '../models/Coordonne';
import Group from '../models/Group';
import Message from '../models/Message';
import User from '../models/User';

@Injectable()
export class ApiRequestService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = 'http://localhost:8080/atelier/mvc/';  // URL to web api

  constructor(private http: HttpClient) { }

  getContacts(idGroup:number): Observable<any> {
    return this.http.get(this.apiUrl + '/groups/' + idGroup + '/contacts');
  }


//   getHero(id: number): Promise<Hero> {
//     const url = `${this.heroesUrl}/${id}`;
//     return this.http.get(url)
//       .toPromise()
//       .then(response => response.json().data as Hero)
//       .catch(this.handleError);
//   }

//   delete(id: number): Promise<void> {
//     const url = `${this.heroesUrl}/${id}`;
//     return this.http.delete(url, {headers: this.headers})
//       .toPromise()
//       .then(() => null)
//       .catch(this.handleError);
//   }

//   create(name: string): Promise<Hero> {
//     return this.http
//       .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
//       .toPromise()
//       .then(res => res.json().data as Hero)
//       .catch(this.handleError);
//   }

//   update(hero: Hero): Promise<Hero> {
//     const url = `${this.heroesUrl}/${hero.id}`;
//     return this.http
//       .put(url, JSON.stringify(hero), {headers: this.headers})
//       .toPromise()
//       .then(() => hero)
//       .catch(this.handleError);
//   }

  private handleError(error: any): Promise<any> { //méthodes appellée à l'endroit ou l'on subscribe un observable
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}