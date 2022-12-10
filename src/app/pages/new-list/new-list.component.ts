import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import List from 'src/app/models/list';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {
  constructor(
    private taskService : TaskService,
    private router : Router,
    private route : ActivatedRoute
  ){

  }

  userId!: string;
  ngOnInit(){
     this.route.params.subscribe((params)=>this.userId = params['userId']);
  }
  addList(listInput : string){
    this.taskService.createList(listInput, this.userId).subscribe(
      (list)=>this.router.navigate(['/users', this.userId, 'lists', (list as List)._id])
    );
  }
}
