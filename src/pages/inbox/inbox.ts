import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../model/task';
import { TaskProvider } from '../../providers/task/task';

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage implements OnInit {

  private tasks: Array<Task> = []; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private taskProvider: TaskProvider) {

  }
 
  ngOnInit() {
    this.getUnassignedTasks();
  }

  getUnassignedTasks(): void {
    this.taskProvider.getUnassignedTasks().subscribe( (tasks) => {
      this.tasks = tasks;
    }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

}
