import { Injectable } from '@angular/core';
import Task from '../models/task';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webService : WebService) { }

  getLists(userId : string){
    return this.webService.get(`users/${userId}/lists`);
  }

  createList(title : string, userId : string){
    return this.webService.post(`users/${userId}/lists`, {title})
  }

  getTasks(listId : string, userId : string){
    return this.webService.get(`users/${userId}/lists/${listId}/tasks`);
  }

  createTask(listId : string, title : string, userId : string){
    return this.webService.post(`users/${userId}/lists/${listId}/tasks`, {title});
  }

  deleteTask(listId : string, taskId : string, userId : string){
    return this.webService.delete(`users/${userId}/lists/${listId}/tasks/${taskId}`);
  }

  deleteList(listId : string, userId : string){
    return this.webService.delete(`users/${userId}/lists/${listId}`);
  }

  toggleCompleted(listId : string, task : Task, userId : string){
    return this.webService.patch(`users/${userId}/lists/${listId}/tasks/${task._id}`, {completed : !task.completed});
  }
}
