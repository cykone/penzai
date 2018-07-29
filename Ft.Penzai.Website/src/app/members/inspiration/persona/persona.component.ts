import { Component, OnInit } from '@angular/core';
import { Persona } from './models/persona';
import { PersonaService } from './persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor(private personaService: PersonaService, private router: Router) { }

  public personas: Persona[] = [];

  ngOnInit() {
    this.personaService.getPersonas()
      .subscribe(personas => {
        this.personas = personas;
      });
  }

  public onPersonalityChanged(event) {
    console.dir(event);
  }

  public openDetails(persona: Persona) {
    this.router.navigate(['/member/inspiration/persona', persona.id]);
  }
}
