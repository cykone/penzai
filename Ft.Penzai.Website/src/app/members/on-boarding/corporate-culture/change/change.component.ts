import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CorporateCulture } from '../models/corporate-culture';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

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
