import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from './tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public iconUrl: string;


  constructor(tabs: TabsComponent) { tabs.addTab(this); }

  public active: boolean;

  ngOnInit() {
  }

}
