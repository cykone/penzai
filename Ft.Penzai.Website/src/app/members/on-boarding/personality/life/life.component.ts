import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personality } from '../models/personality';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {
  @Input()
  public personality: Personality;

  @Output()
  public finish = new EventEmitter<string>();

  @Output()
  public back = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onBack(): void {
    this.back.emit();
  }

  public onSubmit(): void {
    this.finish.emit();
  }
}
