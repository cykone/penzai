import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personality } from '../models/personality';

@Component({
  selector: 'app-decission',
  templateUrl: './decission.component.html',
  styleUrls: ['./decission.component.css']
})
export class DecissionComponent implements OnInit {

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
