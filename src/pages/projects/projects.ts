import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Project } from '../../model/project';

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  projects: Project[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }

}
