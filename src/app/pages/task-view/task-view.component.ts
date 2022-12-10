import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import List from 'src/app/models/list';
import Task from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  lists : List[] = [];
  tasks : Task[] = [];
  listId! : string;

  constructor(private taskService : TaskService, 
    private route : ActivatedRoute, 
    private router : Router) {
  }
  userId! : string;
  ngOnInit(){
    this.route.params.subscribe((params)=>
      this.userId = params['userId']
    );
   this.taskService.getLists(this.userId).subscribe((list) => {this.lists = (list as List[])});
   this.route.params.subscribe((params:Params)=>{
    this.listId = params['listId'];
    if(!this.listId)return;
    this.taskService.getTasks(this.listId, this.userId).subscribe((tasks)=>this.tasks = (tasks as Task[]));
   })
  }

  toggleTaskCompleted(task : Task){
    this.taskService.toggleCompleted(this.listId, task, this.userId).subscribe(()=>task.completed = !task.completed);
  }

  deleteTask(task : Task){
    this.taskService.deleteTask(this.listId, task._id, this.userId).subscribe((task)=> this.tasks = this.tasks.filter(t => t._id !=(task as Task)._id));
  }

  deleteList(list : List){
    this.taskService.deleteList(list._id, this.userId).subscribe(()=>this.lists = this.lists.filter((l)=> l._id!=list._id));
  }
  addTaskClick(){
    if(!this.listId){
      alert("Please select a list so that the tasks can be added to that list");
      return;
    }
    this.router.navigate(['./new-task'], {relativeTo: this.route})
  }
} 
