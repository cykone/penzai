import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Persona } from './models/persona';
import { PersonaDetail } from './models/persona-detail';

@Injectable()
export class PersonaService {

  constructor() { }

  public getPersonas(): Observable<Persona[]> {
    const ret: Persona[] = [];
    for (let i = 0; i < 10; i++) {
      ret.push(new Persona());
    }

    return Observable.of(ret);
  }

  public getPersonaDetail(personaId: string): Promise<PersonaDetail> {
    const ret = new PersonaDetail();

    return Promise.resolve(ret);
  }
}
