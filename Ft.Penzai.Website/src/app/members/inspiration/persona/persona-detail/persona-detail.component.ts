import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css']
})
export class PersonaDetailComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private personaService: PersonaService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const personaDetail = this.personaService.getPersonaDetail(params['id']);
    });
  }
}
