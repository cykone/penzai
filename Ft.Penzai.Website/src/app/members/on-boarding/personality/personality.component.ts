import { Component, OnInit } from '@angular/core';

import { Personality } from './models/personality';
import { IFormState } from '../contracts/states/IFormState';
import { IFromStateContext } from '../contracts/states/IFormStateContext';
import { FocusState } from './states/formStates';
import { Router } from '@angular/router';
import { UserManager } from '../../../penzai-common/account/user.manager';

@Component({
  selector: 'app-personality',
  templateUrl: './personality.component.html',
  styleUrls: ['./personality.component.css']
})
export class PersonalityComponent implements OnInit, IFromStateContext {

  constructor(private router: Router, private userManager: UserManager) { }

  public personality: Personality = new Personality();

  public currentState: IFormState;

  public backToPreviousSection(): void {
    console.log('called');
    this.router.navigate(['/start/welcome']);
  }

  public nextState(state: IFormState): void {
    this.currentState = state;
  }

  public finish(): void {
    const currentUser = this.userManager.GetCurrentUser();
    // TODO Store on server
    this.router.navigate(['/start/corporate-culture']);
  }

  ngOnInit() {
    this.currentState = new FocusState();
  }

  public onBack(): void {
    this.currentState.back(this);
  }

  public onSubmit(): void {
    this.currentState.handleState(this);
  }
}
