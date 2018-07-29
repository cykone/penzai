import { Component, OnInit } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor() { }

  public tabs: TabComponent[] = [];

  public addTab(tab: TabComponent): void {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

  public selectTab(tab: TabComponent) {
    this.tabs.forEach(t => {
      t.active = false;
    });

    tab.active = true;
  }

  ngOnInit() {
  }

}
