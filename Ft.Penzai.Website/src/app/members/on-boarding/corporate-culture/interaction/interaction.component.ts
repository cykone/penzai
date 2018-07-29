import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CorporateCulture } from '../models/corporate-culture';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {

  @Input()
  public culture: CorporateCulture;

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
