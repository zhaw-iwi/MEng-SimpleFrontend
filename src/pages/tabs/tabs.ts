import { Component } from '@angular/core';

import { ProjectsPage } from '../projects/projects';
import { InboxPage } from '../inbox/inbox';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InboxPage;
  tab2Root = ProjectsPage;

  constructor() {

  }
}
