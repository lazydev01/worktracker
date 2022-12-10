import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit  {
  listId : string = "";
  userId! : string;
  constructor(
    private taskService : TaskService,
    private router : Router,
    private route : ActivatedRoute
    ){
      this.route.params.subscribe((params : Params)=> this.listId = params['listId'])
  }
  ngOnInit(){
    this.route.params.subscribe((params)=> this.userId = params['userId']);
  }
  addTask(taskInput : string){
    this.taskService.createTask(this.listId, taskInput, this.userId).subscribe((list)=>this.router.navigate(['../'], {relativeTo : this.route}));
  }

}
