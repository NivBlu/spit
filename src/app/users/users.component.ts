import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any; 
  counter:number = 0;

  constructor(public configService:ServiceService ) { }

  ngOnInit() {
    this.getUsers();
  }


  getUsers() {  
    this.configService.getConfig().subscribe(data => {
      console.log(data);
      this.users = data;
    });

  }

  counterUp(x) {
     this.users[x].vote.votes++;
    }

  counterDown(x){
    if(this.users[x].vote.votes>0){
      this.users[x].vote.votes--;
    }
    else{
      this.users[x].vote.votes==0;
    }
  }

}
