import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFormState } from '../contracts/states/IFormState';
import { ChangeState } from './states/culture-states';
import { CorporateCulture } from './models/corporate-culture';

@Component({
  selector: 'app-corporate-culture',
  templateUrl: './corporate-culture.component.html',
  styleUrls: ['./corporate-culture.component.css']
})
export class CorporateCultureComponent implements OnInit {

  // https://hbr.org/2018/01/the-culture-factor

  constructor(private router: Router) { }

  public culture: CorporateCulture = new CorporateCulture();

  public currentState: IFormState;

  public nextState(state: IFormState): void {
    this.currentState = state;
  }

  public backToPreviousSection(): void {
    this.router.navigate(['/start/personality']);
  }

  public finish(): void {
    // TODO Store on server
    this.router.navigate(['/member']);
  }

  ngOnInit() {
    this.currentState = new ChangeState();
  }

  public onBack(): void {
    this.currentState.back(this);
  }

  public onSubmit(): void {
    this.currentState.handleState(this);
  }

}
