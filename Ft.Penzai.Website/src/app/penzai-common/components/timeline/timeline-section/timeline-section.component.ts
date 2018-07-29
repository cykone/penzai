import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-section',
  templateUrl: './timeline-section.component.html',
  styleUrls: ['./timeline-section.component.css']
})
export class TimelineSectionComponent implements OnInit {

  @Input()
  public title = '';

  @Input()
  public description = '';

  @Input()
  public iconUrl = '';

  @Input()
  public showContent = true;

  @Input()
  public showCollapsButton = false;

  constructor() { }

  ngOnInit() {
  }

  public changeContentVisibility(): void {
    this.showContent = !this.showContent;
  }
}
