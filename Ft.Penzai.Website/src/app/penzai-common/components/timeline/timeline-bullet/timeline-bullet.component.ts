import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-bullet',
  templateUrl: './timeline-bullet.component.html',
  styleUrls: ['./timeline-bullet.component.css']
})
export class TimelineBulletComponent implements OnInit {

  constructor() { }

  @Input()
  public title = '';

  @Input()
  public textSide = 'left';

  @Input()
  public imgSrc = '';

  ngOnInit() {
  }
}
