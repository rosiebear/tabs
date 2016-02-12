import {Component} from 'angular2/core';
import {Tabs} from './../tabs/tabs';
import {Tab} from './../tabs/tab';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [],
  template: `
      <tabs>
        <tab active='false' [tab-title]="'Tab 1'">Tab 1 Content</tab>
        <tab active='true' tab-title="Tab 2">Tab 2 Content</tab>
      </tabs>
    `,
  directives: [Tabs, Tab]
})
export class Home {

  constructor() {}

}
