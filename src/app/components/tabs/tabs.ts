import { Component, ContentChildren, QueryList, AfterContentInit } from 'angular2/core';
import { Tab } from './tab';

@Component({
  selector: 'tabs',
  template:`
    <ul class="nav nav-tabs">
      <li *ngFor="#tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a>{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `
})
export class Tabs implements AfterContentInit {

  @ContentChildren(Tab) tabs: QueryList<Tab>;

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab)=>tab.active);

    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: Tab){
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
